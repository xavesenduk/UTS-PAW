function fetchTableIT(){
    var Parent = document.getElementById('dataMahasiswa');
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
    fetchTableITData();
}

function fetchTableITData(){
    fetch("./angkatan19.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        buildTableIT(data);
    })
}

function buildTableIT(data){
    var table = document.getElementById('dataMahasiswa');
    var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	for (var i = 65; i < 156; i++){
		var row = `<tr id="space"></tr>
                    <tr>
	    				<td>${data[i].Nim}${space}${data[i].Nama}</td>
                    </tr>`;
	    table.innerHTML += row;
	}
}