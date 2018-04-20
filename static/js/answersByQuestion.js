var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1","2","3","4"],
        datasets: [{
            label: 'Keywords',
            data: [360, 240, 206, 102],
            backgroundColor: pollstrChartColors(nonOverlappingOpacity),
            borderColor: pollstrChartColors(1),
            hoverColor: pollstrChartColors(1),
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          display: false
        },
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
