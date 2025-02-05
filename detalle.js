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
let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"));

function cargarproducto() {
    let enlaces = document.getElementById("boxproducto");
    let lista = document.createElement("div");
    lista.innerHTML = `<h3>${productodetalle.nombre}</h3><br>
        <img src=${productodetalle.img} alt=""><br>
        <p>$ ${productodetalle.precio}</p><br>
        <div class="botonescontador"><br>
        <button onclick="sumar()">+</button>
        <p id="contarproducto">0</p>
        <button onclick="restar()">-</button></div><br>
        <button onclick="cargarcarrito()">Agregar al carrito</button>`;
        
        
        
    enlaces.appendChild(lista);
}

cargarproducto();

let contador = 0;
function sumar(){
    contador = contador + 1;
    document.getElementById("contarproducto").innerHTML = contador;
}

function restar(){
    if(contador > 0){
    contador = contador -1;
    document.getElementById("contarproducto").innerHTML = contador;
}
}


function cargarcarrito() {
    if (contador===0){
        alert("Por favor, ingrese la cantidad de productos deseados")
    }else{
        let carrito = JSON.parse(localStorage.getItem("carrito"))

        if (carrito === null){
            carrito = []
        }

        cantidadproducto = parseInt(document.getElementById("contarproducto").innerHTML);
        productonuevo = {id: productodetalle.id,
            nombre:productodetalle.nombre,
            cantidad: cantidadproducto,
            precio: productodetalle.precio,
            img: productodetalle.img
        }

    carrito.push(productonuevo)
    const enJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", enJSON)
    window.location.href = "carrito.html"
    }
}

