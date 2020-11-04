google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Prodi', 'Jumlah Mahasiswa'],
    ['Mahasiswa Elektro',     65],
    ['Mahasiswa Informatika',      91]
  ]);

  var options = {
    backgroundColor: '#2d3136',
    height: 140,
    chartArea: {top: 10, bottom: 10},
    legend: {textStyle: {color: 'white'}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechartkomposisi'));
  chart.draw(data, options);
}