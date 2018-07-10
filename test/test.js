const expect = require('chai').expect
const tablegenerator = require('..').default

describe('#tablegenerator', function(){
    it('si se le entrega un enlace devuelve una tabla donde se llame a la función', function(){
        const tabla = tablegenerator.getURI("https://jsonplaceholder.typicode.com/users");
        expect(tabla).to.be.ok();
    })
    it('si se le entrega texto en formato json devuelve una tabla en una etiqueta con id "tabla"', function(){
        
    })
})