// window.location.protocol = "http:"
// window.location.host = "css-tricks.com"
// window.location.pathname = "example/index.html"
// console.log("document.URL : "+document.URL);
// console.log("document.location.href : "+document.location.href);
// console.log("document.location.origin : "+document.location.origin);
// console.log("document.location.hostname : "+document.location.hostname);
// console.log("document.location.host : "+document.location.host);
// console.log("document.location.pathname : "+document.location.pathname);

function addRow(xtable,listValue) {
    var rowCount = xtable.rows.length;
    var row = xtable.insertRow(rowCount);
    row.insertCell(0).innerHTML = value;
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myDynamicTable");
    table.deleteRow(index);
}

function addTable(mapValue) {
    var mapJson = JSON.parse(mapValue);
    var myTableDiv = document.getElementById("myDynamicTable");

    var table = document.createElement('TABLE');
    table.border='1';

    // crate table header
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>" + mapJson.list_name + "</b>";

    // create table body
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    var listObj = mapJson.list;
    for (var i=0; i<listObj.length; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);

       var td = document.createElement('TD');
       td.width='75';
       td.appendChild(document.createTextNode(listObj[i]));
       tr.appendChild(td);
    }
    myTableDiv.appendChild(table);
}

function load() {
    console.log("Page load finished");
    var getListUrl = document.location.origin + '/' + 'api' + '/' + 'list';
    httpGetAsync("GET",getListUrl,function (responseText) {
        addTable(responseText);
    });
}

// http requests
function httpGetAsync(method, theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open(method, theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
