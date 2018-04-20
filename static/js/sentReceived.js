var ctx = document.getElementById("lineChart").getContext('2d');
var chartType = 'line';
var lineData = {
    labels: ["1 Abril","2 Abril","3 Abril","4 Abril","5 Abril","6 Abril"],
    datasets: [{
        label: 'Respondidas',
        data: [200, 453, 554, 705, 826, 908],
        backgroundColor: pollstrChartColors(overlappingOpacity)[0],
        borderColor: pollstrChartColors(1)[0],
        borderWidth: 1
    },
    {
        label: 'Enviadas',
        data: [220, 500, 730, 890, 1050, 1420],
        backgroundColor: pollstrChartColors(overlappingOpacity)[1],
        borderColor: pollstrChartColors(1)[1],
        borderWidth: 1
    }]
};
var lineOptions = {
  maintainAspectRatio: true,
  legend: {
    position: 'right'
  },
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
};
var lineChart = new Chart(ctx, {
    type: chartType,
    data: lineData,
    options: lineOptions
});

//function toggleChart(button) {
//  if (chartType == 'line') {
//    chartType = 'bar';
//  } else if (chartType == 'bar') {
//    chartType = 'line';
//  }
//  console.log(chartType);
//  lineChart.update();
//}
//function toggleChart(button) {
//  console.log(config.type)
//}
document.getElementById('chartTypeChange').onclick = function() {
  console.log('Hello');
  lineChart.destroy();
  lineChart = new Chart(ctx, {
    type: 'bar',
    data: lineData,
    options: lineOptions
  });
};
