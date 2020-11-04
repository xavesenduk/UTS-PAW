google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Agama', 'Jumlah Mahasiswa'],
    ['Protestan',     54],
    ['Katolik',      3],
    ['Islam',      4],
    ['Hindu',      1],
    ['Buddha',      0]
  ]);

  var options = {
    backgroundColor: '#2d3136',
    height: 140,
    chartArea: {top: 10, bottom: 10},
    legend: {textStyle: {color: 'white'}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechartagama'));
  chart.draw(data, options);
}