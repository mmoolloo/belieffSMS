var ctx = document.getElementById("pieChart").getContext('2d');
var barChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["esto","está","muy","fregón","de","verdad"],
        datasets: [{
            label: 'Keywords',
            data: [10, 11, 3, 5, 2, 3],
            backgroundColor: pollstrChartColors(nonOverlappingOpacity),
            borderColor: pollstrChartColors(1),
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          position: 'right',
          boxWidth: 20
        }
    }
});
