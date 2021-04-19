const urlAPIcat = 'https://disenoydesarrolloapi.azurewebsites.net/api/Producto/Categorias';
const urlAPI = 'https://disenoydesarrolloapi.azurewebsites.net/api/Producto';

let contenidoCombo = document.querySelector('#comboCategoria');
let contenidoTabla = document.querySelector('#contenidoTabla');
let botonBuscar = document.querySelector("#botonBuscar");
let body = document.querySelector("body");

let comboCategoria = document.querySelector("#comboCategoria");
let textoProducto = document.querySelector("#textoProducto");

const buscarAuto = (event) => {

    event.preventDefault();

    let categoria = comboCategoria.value;
    let producto = textoProducto.value;


    localStorage.setItem('nombre', textoProducto);
    fetch(`${urlAPI}?nombre=${producto}`)
        .then(response => response.json())
        .then(data => llenarTabla(data));
}

const formatoDinero = (monto) => {
    return monto.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const llenarTabla = (autos) => {

    let contenido = '';
    contenidoTabla.innerHTML = '';

    autos.forEach((productos, index) => {

        contenido += `<tr>
        <td>  ${productos.codigo} </td>
        <td>  ${productos.nombre} </td>
        <td>  ${productos.categoria} </td>
        <td>  ${formatoDinero(productos.precio)}</td>  
        <td>  ${productos.proveedor} </td>
        <td>  <button value=${productos.id} id='botonModificar' >Editar</button>  
              <button onclick="alerta()" value=${productos.id} id='botonEliminar' class='boton-eliminar'>Eliminar</button>
        </td>  
        <tr>
        `});

    contenidoTabla.innerHTML = contenido;
}

botonBuscar.addEventListener('click', buscarAuto)
body.addEventListener('click', EliminarAuto)

window.addEventListener('load', (event) => {
    document.querySelector("#textoProducto").value = localStorage.getItem('producto');
});
    
function alerta()
    {
    let mensaje;
    let opcion = confirm("Deseas Eliminar ");
    if (opcion == true) {
        mensaje = "Has clickado OK";
    } else {
        mensaje = "Has clickado Cancelar";
    }
}