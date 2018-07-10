const expect = require('mocha').expect
const tablegenerator = require('..')

describe('#tablegenerator', function(){
    it('si se le entrega un enlace devuelve una tabla donde se llame a la función', function(){
        const tabla = creartablefromREST("https://jsonplaceholder.typicode.com/users");
        expect(tabla).to.be.a('String')
    })
})