'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebComponentCEtable = exports.WebComponentCEtable = function (_HTMLElement) {
    _inherits(WebComponentCEtable, _HTMLElement);

    function WebComponentCEtable() {
        _classCallCheck(this, WebComponentCEtable);

        var _this = _possibleConstructorReturn(this, (WebComponentCEtable.__proto__ || Object.getPrototypeOf(WebComponentCEtable)).call(this));

        _this._jsonroot = "null";
        return _this;
    }

    _createClass(WebComponentCEtable, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            var shadow = this.attachShadow({ mode: 'open' });
            var prom = this.GETjson(this.getAttribute('jsonroot'));

            prom.then(function (data) {
                var cont = _this2.crearTabla(data);
                console.log(data);
                shadow.appendChild(cont);
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'crearTabla',
        value: function crearTabla(datos) {
            console.log('aqui ando');
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
            return container;
        }
    }, {
        key: 'GETjson',
        value: function GETjson(URI) {
            return fetch(URI).then(function (r) {
                return r.json();
            }); //promesa
        }
    }]);

    return WebComponentCEtable;
}(HTMLElement);

window.customElements.define('wc-cetable', WebComponentCEtable);