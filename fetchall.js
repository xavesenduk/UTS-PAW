function fetchTableSemua(){
    var Parent = document.getElementById('dataMahasiswa');
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
    fetchTableSemuaData();
}

function fetchTableSemuaData(){
    fetch("./angkatan19.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        buildTableSemua(data);
    })
}

function buildTableSemua(data){
    var table = document.getElementById('dataMahasiswa');
    var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	for (var i = 0; i < data.length; i++){
		var row = `<tr id="space"></tr>
                    <tr>
	    				<td>${data[i].Nim}${space}${data[i].Nama}</td>
                    </tr>`;
	    table.innerHTML += row;
	}
}