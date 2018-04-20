var options = {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'One',
        data: [
          {
            x: 6,
            y: 7,
            r: 10
          },
          {
            x: 8,
            y: 2,
            r: 8
          }
        ],
        backgroundColor:pollstrChartColors(overlappingOpacity)[0],
        hoverBackgroundColor: pollstrChartColors(1)[0]
      },
      {
        label: 'Two',
          data: [
            {
              x: 6,
              y: 2,
              r: 12
            }
          ],
          backgroundColor:pollstrChartColors(overlappingOpacity)[1],
          hoverBackgroundColor: pollstrChartColors(1)[1]
      },
      {
        label: 'Three',
          data: [
            {
              x: 2,
              y: 6,
              r: 15
            }
          ],
          backgroundColor:pollstrChartColors(overlappingOpacity)[2],
          hoverBackgroundColor: pollstrChartColors(1)[2]
      },
      {
        label: 'Four',
          data: [
            {
              x: 5,
              y: 3,
              r: 18
            }
          ],
          backgroundColor:pollstrChartColors(overlappingOpacity)[3],
          hoverBackgroundColor: pollstrChartColors(1)[3]
      },
      {
        label: 'Five',
          data: [
            {
              x: 4,
              y: 1,
              r: 20
            }
          ],
          backgroundColor:pollstrChartColors(overlappingOpacity)[4],
          hoverBackgroundColor: pollstrChartColors(1)[4]
      },
      {
        label: 'Six',
          data: [
            {
              x: 4,
              y: 2,
              r: 55
            }
          ],
          backgroundColor:pollstrChartColors(overlappingOpacity)[5],
          hoverBackgroundColor: pollstrChartColors(1)[5]
      }
      ]
  },
  options: {
      maintainAspectRatio: true,
  }
}

var ctx = document.getElementById('bubbleChart').getContext('2d');
new Chart(ctx, options);
