const menus = [{nombre:"inicio", url:"index.html"},
{nombre:"¿Quienes somos?", url:"quienes.html"},
{nombre:"contacto", url:"contacto.html"},

]

function cargarmenu(){
    let enlaces = document.getElementById("ulmenu")
    for (const menu of menus) {
        let lista = document.createElement("li")
        lista.innerHTML=`<a href="${menu.url}">${menu.nombre}</a>`
        enlaces.appendChild(lista);
        
    }
}

cargarmenu();

const productos = [{nombre:"Malbec", precio:"9000", img:"img/foto3.png", id: "1"},
    {nombre:"Bonarda", precio:"10000", img:"img/foto5.png", id:"2"},
    {nombre:"Suavignion", precio:"12000", img:"img/foto4.png", id:"3"} 
]

function cargarproductos() {
    let ventas = document.getElementById("boxproductos");
    for (const producto of productos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div id="boxproducto">
            <h3>${producto.nombre}</h3><br>
            <img src=${producto.img} alt=""> 
            <p>$ ${producto.precio}</p><br>
            <button onclick="verdetalle('${producto.id}')">Detalle</button>
            </div>`;
        ventas.appendChild(contenedor);
    }
}

cargarproductos();

function verdetalle(idproducto){
    const buscarproducto=productos.find(producto => producto.id === (idproducto));
    const enJSON =JSON.stringify(buscarproducto);
    localStorage.setItem("detalleproducto", enJSON)
    window,location.href= "detalle.html";

}

