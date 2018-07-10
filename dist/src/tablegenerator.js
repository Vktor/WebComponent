'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creartablefromREST = creartablefromREST;
function creartablefromREST(URI) {
    var _this = this;

    fetch(URI).then(function (r) {
        return r.json();
    }).then(function (data) {
        var cont = _this.crearTabla(data);
    }).catch(function (e) {
        return console.log(e);
    });
}

function crearTabla(datos) {
    //table container
    var container = document.createElement('div');
    container.className = 'wcContainer';
    //Table Structure
    var table = document.createElement('table'),
        tr = table.insertRow(-1),
        // row
    tbody = document.createElement('tbody'); //table body
    table.className = 'wcTable';
    tr.className = 'wctr';
    tbody.className = 'wctbody';
    //Making Header (extract value from header)
    var col = [];
    for (var i = 0; i < datos.length; i++) {
        for (var key in datos[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    for (var _i = 0; _i < col.length; _i++) {
        var th = document.createElement('th'); //Table Header
        th.innerHTML = col[_i];
        tr.appendChild(th);
    }
    //Add json data to the table as rows
    for (var _i2 = 0; _i2 < datos.length; _i2++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = datos[_i2][col[j]];
        }
    }
    container.appendChild(table);
    var thediv = document.getElementById("tabla");
    console.log(container);
    //return container;
    thediv.innerHTML = "";
    thediv.appendChild(container);
}