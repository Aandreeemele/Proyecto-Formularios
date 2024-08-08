//Llamado al node de DOOM
let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";

//Lista de datos(String)
let formulario = [
    {nombre:"Login",link:"componentes/login/login.html"},
    {nombre:"formulaDeComentariosReseñas",link:"componentes/formulaDeComentariosReseñas/reseña.html"},
    {nombre:"formulaDeContactos",link:"componentes/formulaDeContactos/contacto.html"},
    {nombre:"formulaDePedidosCompras",link:"componentes/formulaDePedidosCompras/pedidos.html"},
    {nombre:"formularioDeBusqueda",link:"componentes/formularioDeBusqueda/busqueda.html"},

];

formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);