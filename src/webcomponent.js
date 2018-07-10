class WebComponentCEtable extends HTMLElement{
    constructor(){
        super();
        this._jsonroot = "null";
    }
    connectedCallback(){
        let shadow = this.attachShadow({mode:'open'})
        let prom = this.GETjson(this.getAttribute('jsonroot'));

        prom.then(data =>{
            let cont =this.crearTabla(data);
            shadow.appendChild(cont);
        })
        .catch(e =>console.log(e));
        
    }
    crearTabla(datos){
        //table container
            let container = document.createElement('div'); 
            container.className ='wcContainer';
        //Table Structure
            let table = document.createElement('table'), 
                tr = table.insertRow(-1),  // row
                tbody = document.createElement('tbody'); //table body
            table.className = 'wcTable';
            tr.className ='wctr';
            tbody.className ='wctbody';
        //Making Header (extract value from header)
            let col = [];
            for(let i=0; i<datos.length; i++){
                for(let key in datos[i]){
                    if(col.indexOf(key)===-1){
                        col.push(key);
                    }
                }
            }
            for(let i=0; i<col.length; i++){ 
                let th = document.createElement('th'); //Table Header
                th.innerHTML=col[i];
                tr.appendChild(th);
            }
        //Add json data to the table as rows
            for(let i=0; i<datos.length; i++){
                tr = table.insertRow(-1);

                for( let j=0; j < col.length; j++){
                    let tabCell = tr.insertCell(-1);
                    tabCell.innerHTML= datos[i][col[j]];
                }
            }

            container.appendChild(table);
            return container;

    }
    GETjson(URI){
        return fetch(URI).then(r=>r.json()); //promesa
    }
}
window.customElements.define('wc-cetable', WebComponentCEtable);