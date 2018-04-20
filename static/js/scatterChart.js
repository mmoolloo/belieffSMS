var ctx = document.getElementById("scatterChart").getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
          label: 'Icecream sales',
          borderColor: pollstrChartColors(1)[0],
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          data: [{
              x: 14.2,
              y: 215
          }, {
              x: 16.4,
              y: 325
          }, {
              x: 11.9,
              y: 185
          }, {
              x: 15.2,
              y: 332
          }, {
              x: 18.5,
              y: 406
          }, {
              x: 22.1,
              y: 522
          }, {
              x: 19.4,
              y: 412
          }, {
              x: 25.1,
              y: 614
          }, {
              x: 23.4,
              y: 544
          }, {
              x: 18.1,
              y: 421
          }, {
              x: 22.6,
              y: 445
          }, {
              x: 17.2,
              y: 408
          }]
      },
      {
          label: 'Jackets sales',
          borderColor: pollstrChartColors(1)[1],
          backgroundColor: pollstrChartColors(overlappingOpacity)[1],
          data: [{
              x: 14.2,
              y: 500
          }, {
              x: 16.4,
              y: 320
          }, {
              x: 11.9,
              y: 602
          }, {
              x: 15.2,
              y: 380
          }, {
              x: 18.5,
              y: 400
          }, {
              x: 22.1,
              y: 280
          }, {
              x: 19.4,
              y: 260
          }, {
              x: 25.1,
              y: 250
          }, {
              x: 23.4,
              y: 200
          }, {
              x: 18.1,
              y: 300
          }, {
              x: 22.6,
              y: 180
          }, {
              x: 17.2,
              y: 345
          }]
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Temperature (ºC)'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Sales (MXN)'
        }
      }]
    },
    tooltips: {
      mode: 'nearest',
      intersect: false,
    },
    legend: {
      position: 'left'
    }
  }
 });
