let Producto = function (nombre, Id, cantidad, precio) {
  this.nombre = nombre;
  this.id = Id;
  this.cantidad = cantidad;
  this.precio = precio;
  this.siguiente=null;
  this.anterior=null;
  this.inscribir = function () {
    return "Producto agregado"
  }
  this.info = function () {
    return this.nombre + "\n ID del producto:" + this.id
  }
  this.infoHtml = function () {

    return "<div><p>Nombre: <br>" + this.nombre +
      "<br>ID del producto <br>" + this.id +
      " <br>Cantidad <br>" + this.cantidad + "<br>" +
      "Precio <br>" + this.precio + "</p></div>"
  }}  
let Grupo = function () {
  this.inicio=null;
  //Profe en esta parte nose porque no funciona, simplemente no guarda y nose que me falta o que puse de mas.
this.agregar = function (nuevo) {
  if (this.inicio===null){
    this.inicio=nuevo;
}else if(inicio.id<nuevo.id){
  inicio.anterior=nuevo;
  nuevo.siguiente=inicio;
  inicio=nuevo;
}else{
  let t= this.inicio;
    if(t.id>nuevo.id)
    {
    nuevo.siguiente=t;
    nuevo.anterior=t.anterior;
    t.anterior.siguiente=nuevo;
    t.anterior=nuevo;
}else{
  t=t.siguiente;
}}
  t.siguiente=nuevo;
  nuevo.anterior=t;
}}
this.buscar = function (id) {
      console.log(this.datos)
      let t=this.inicio;
      while (t!=null && t.id!=id){
      t=t.siguiente;
      }
      return t;
      }
//y como el agregar no funciona nose si el listar tambien lo haga.      
this.listar = function () {
    let res=""; 
    let t=this.inicio;
    if(t.siguiente==null){
      res= t.info() + "<br>";
      return res;
  }else{
    while(t.siguiente!=null){
      res=res+t.info()+"<br>";
      t=t.siguiente;
    }
    res=res+t.info()+"<br>";
    return res;
  }}
this.eliminar = function (id) {
    if (this.inicio!=null){
    if (this.inicio.id==id)
    this.inicio=this.inicio.siguiente;
    else{
   let t=this.inicio;
      while( t.siguiente!=null){
      if (t.siguiente.id==id){
      t.siguiente=t.siguiente.siguiente;
  return true;
}
  else
    t=t.siguiente;
}
  return false;
}}}
let grupo2c = new Grupo();

let btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', () => {
  let nom, id, pre, cant;
  nom = document.getElementById('txtNombre').value;
  id = document.getElementById('txtId').value;
  pre = document.getElementById('txtCantidad').value;
  cant = document.getElementById('txtPrecio').value;
  let producto = new Producto(nom, id, pre, cant);
  grupo2c.agregar(producto);
  console.log('Se agrego ' + producto.info());
});
let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => {
  let id = document.getElementById('txtId').value;
  let buscado = grupo2c.buscar(id);
  let res = document.getElementById('resultados');
  if (buscado == null)
    res.innerHTML = "<h3>No se encontro en la busqueda</h3>"
  else {
    res.innerHTML = "<h3>Si se encontro</h3>" + buscado.infoHtml();
    document.getElementById('txtId').value = buscado.id;
    document.getElementById('txtCantidad').value = buscado.cantidad;
}})
let btnEliminar=document.getElementById("btnEliminar");
  btnEliminar.addEventListener("click", ()=>{
    let id = document.getElementById('txtId').value;
    let res = document.getElementById('resultados');
    let eliminado=grupo2c.eliminar(id);
    if(eliminado==false)
      res.innerHTML= "<h3>No se elimino ningun producto</h3>"
    else
      res.innerHTML= "<h3>Se ha eliminado el producto</h3>"
})
let btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', () => {
  let res = document.getElementById('resultados');
  res.innerHTML = "<h1>LISTADO</h1>" + grupo2c.listar();
})