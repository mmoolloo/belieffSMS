var ctx = document.getElementById("radarChart").getContext('2d');
var lineChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["Ambiente de trabajo", "Liderazgo", "Instalaciones", "Beneficios", "Tecnología", "Claridad de objetivos", "Capacitación"],
    datasets: [{
      label: 'Example 1',
      data: [1.2, 3, 3.6, 2.2, 4.5, 5.2, 4.1],
      backgroundColor: pollstrChartColors(overlappingOpacity)[0],
      borderColor: pollstrChartColors(1)[0],
      pointBackgroundColor: pollstrChartColors(1)[0],
      pointBorderColor: pollstrChartColors(1)[0],
      borderWidth: 2
    }, ]
  },
  options: {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0
      }
    },
    legend: {
      position: 'right'
    }
  }
});
