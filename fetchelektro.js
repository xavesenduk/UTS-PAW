function fetchTableElektro(){
    var Parent = document.getElementById('dataMahasiswa');
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
    fetchTableElektroData();
}

function fetchTableElektroData(){
    fetch("./angkatan19.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        buildTableElektro(data);
    })
}

function buildTableElektro(data){
    var table = document.getElementById('dataMahasiswa');
    var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	for (var i = 0; i < 65; i++){
		var row = `<tr id="space"></tr>
                    <tr>
	    				<td>${data[i].Nim}${space}${data[i].Nama}</td>
                    </tr>`;
	    table.innerHTML += row;
	}
}