var ctx = document.getElementById("polarChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["esto", "está", "muy", "fregón", "de", "verdad"],
    datasets: [{
      label: 'Keywords',
      data: [10, 11, 3, 5, 2, 3],
      backgroundColor: pollstrChartColors(overlappingOpacity),
      borderColor: pollstrChartColors(1),
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      position: 'left',
      boxWidth: 20
    }
  }
});
