"use strict";

// get all workout data from back-end

fetch(`/api/workouts/range`)
  .then(response => response.json())
  .then(data => populateChart(data));

API.getWorkoutsInRange();

function generatePalette() {
  return [
    `#003f5c`,
    `#2f4b7c`,
    `#665191`,
    `#a05195`,
    `#d45087`,
    `#f95d6a`,
    `#ff7c43`,
    `ffa600`,
    `#003f5c`,
    `#2f4b7c`,
    `#665191`,
    `#a05195`,
    `#d45087`,
    `#f95d6a`,
    `#ff7c43`,
    `ffa600`
  ];
}

function populateChart(data) {
  const totalDurations = getTotalDurations(data);
  const averageWeights = calculateAverageWeight(data);
  const colors = generatePalette();

  listExcercises(data);

  const line = document.querySelector(`#canvas`).getContext(`2d`);
  const bar = document.querySelector(`#canvas2`).getContext(`2d`);

  const lineChart = new Chart(line, {
    type: `line`,
    data: {
      labels: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`],
      datasets: [
        {
          label: `Last 10 Workout Durations`,
          backgroundColor: `red`,
          borderColor: `red`,
          data: totalDurations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });
  console.log(lineChart);

  const barChart = new Chart(bar, {
    type: `bar`,
    data: {
      labels: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`],
      datasets: [
        {
          label: `Average Weight From Last 10 Workouts`,
          data: averageWeights,
          backgroundColor: colors
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: `Average Weight`
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
  console.log(barChart);
}

function getTotalDurations(workouts) {
  return workouts.map(workout => workout.totalDuration);
}

function calculateAverageWeight(workouts) {
  const totals = [];

  for (const workout of workouts) {
    let total = 0;
    let numWeightedExcercises = 0;
    for (const excercise of workout.exercises) {
      if (excercise.weight) {
        total += excercise.weight;
        ++numWeightedExcercises;
      }
    }
    totals.push(total / numWeightedExcercises || 0);
  }

  return totals;
}

function listExcercises(data) {
  const header = document.createElement(`h2`);
  header.innerText = `Last ${data.length} Excercises`;
  const excercisesList = document.createElement(`ol`);
  for (const workout of data) {
    for (const excercise of workout.exercises) {
      const li = document.createElement(`li`);
      li.innerText = excercise.name;
      excercisesList.appendChild(li);
    }
  }
  document.body.appendChild(header);
  document.body.appendChild(excercisesList);
}
