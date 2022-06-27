const path = require('path');
const fs = require('fs');

//Pasa de una cadena de texto a un objeto literal
let motosDelArchivoJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','database','motos.json')));

module.exports = {
    index: function(req,res){
        //return res.send(motos);
        //res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{motos : motosDelArchivoJSON});
    }
}