google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tahun', 'Mahasiswa'],
    ['2000',  6],
    ['2001',  36],
    ['2002',  18],
    ['2003',  6]
  ]);

  var options = {
    backgroundColor: '#2d3136',
    height: 140,
    chartArea: {top: 10},
    legend: {position: 'top', textStyle: {color: 'white'}},
    vAxis: {minValue: 0, textStyle: {color: 'white'}},
    hAxis: {textStyle: {color: 'white'}}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('areacharttahunlahir'));
  chart.draw(data, options);
}