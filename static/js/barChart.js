var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Whatever","You","Want","To","Plot","Here"],
        datasets: [{
            label: 'Keywords',
            data: [10, 11, 3, 5, 2, 3],
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
