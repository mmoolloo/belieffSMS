
var chartType = 'line';
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

var febLabels = [],
  marLabels = [],
  aprLabels = [],
  febDataS = [],
  febDataR = [],
  febDataRD = [],
  marDataS = [],
  marDataR = [],
  marDataRD = [],
  aprDataS = [],
  aprDataR = [],
  aprDataRD = [];

for (var i = 1; i <= 28; i++) {
    febLabels.push(i + ' Feb');
}

for (var i = 1; i <= 31; i++) {
    marLabels.push(i + ' Mar');
}

for (var i = 1; i <= 30; i++) {
    aprLabels.push(i + ' Abr');
}



for (var i = 1; i <= 28; i++) {
    febDataS.push(Math.floor(Math.random() * 1500));
}

for (var i = 1; i <= 28; i++) {
    febDataRD.push(Math.floor(Math.random() * 455));
}

febDataS.sort(function(a, b){return a - b});
febDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= febDataRD.length - 1; i++) {
  febDataR.push(febDataS[i] - febDataRD[i]);
}



for (var i = 1; i <= 31; i++) {
    marDataS.push(Math.floor(Math.random() * 1500));
}

for (var i = 1; i <= 31; i++) {
    marDataRD.push(Math.floor(Math.random() * 455));
}

marDataS.sort(function(a, b){return a - b});
marDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= marDataRD.length - 1; i++) {
  marDataR.push(marDataS[i] - marDataRD[i]);
}


for (var i = 1; i <= 30; i++) {
    aprDataS.push(Math.floor(Math.random() * 1500));
}

for (var i = 1; i <= 30; i++) {
    aprDataRD.push(Math.floor(Math.random() * 455));
}

aprDataS.sort(function(a, b){return a - b});
aprDataRD.sort(function(a, b){return a - b});

for(var i = 0; i <= aprDataRD.length - 1; i++) {
  aprDataR.push(aprDataS[i] - aprDataRD[i]);
}


function billingFebrero(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: febLabels,
      datasets: [{
          label: 'Respondidas',
          data: febDataR,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Enviadas',
          data: febDataS,
          backgroundColor: pollstrChartColors(overlappingOpacity)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
}



function billingMarzo(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: marLabels,
      datasets: [{
          label: 'Respondidas',
          data: marDataR,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Enviadas',
          data: marDataS,
          backgroundColor: pollstrChartColors(overlappingOpacity)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
}

function billingAbril(){
  var ctx = document.getElementById("consumo").getContext('2d');
  var lineData = {
      labels: aprLabels,
      datasets: [{
          label: 'Respondidas',
          data: aprDataR,
          backgroundColor: pollstrChartColors(overlappingOpacity)[0],
          borderColor: pollstrChartColors(1)[0],
          borderWidth: 1
      },
      {
          label: 'Enviadas',
          data: aprDataS,
          backgroundColor: pollstrChartColors(overlappingOpacity)[1],
          borderColor: pollstrChartColors(1)[1],
          borderWidth: 1
      }]
  };
  var lineChart = new Chart(ctx, {
      type: chartType,
      data: lineData,
      options: lineOptions
  });
}
