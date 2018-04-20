var ctx = document.getElementById("stackedBarChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Whatever", "You", "Want", "To", "Plot", "Here"],
    datasets: [{
        label: 'Text 1',
        data: [10, 11, 3, 5, 2, 3],
        backgroundColor: pollstrChartColors(nonOverlappingOpacity)[0],
        borderColor: pollstrChartColors(1)[0],
        borderWidth: 1
      },
      {
        label: 'Text 2',
        data: [8, 7, 1, 7, 6, 3],
        backgroundColor: pollstrChartColors(nonOverlappingOpacity)[1],
        borderColor: pollstrChartColors(1)[1],
        borderWidth: 1
      }
    ]
  },
  options: {
    legend: {
      display: true
    },
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
