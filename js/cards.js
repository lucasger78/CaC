class Curso {
  constructor(nombre, fechaInicio, precio, disponibilidad, imagen){
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagen = imagen;
    
  }
}


let elementoCarrito = [];
const cursos = [

  {
    nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
    fechaInicio: "Inicio: 10/08",
    precio: 5000,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/guitarra.jpg"
  },

  {
    nombre: "Saxo Alto / Tenor",
    fechaInicio: "Inicio: 12/08",
    precio: 6500,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/saxo.jpg"
  },
  {
    nombre: "Flauta Traversa",
    fechaInicio: "Inicio: 10/08",
    precio: 4500,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/flauta.jpg"
  },

  {
    nombre: "Piano / Teclado / Acordeón",
    fechaInicio: "Inicio: 15/08",
    precio: 5500,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/piano.jpg"
  },

  {
    nombre: "Trompeta",
    fechaInicio: "Inicio: 11/09",
    precio: 6000,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/trompeta.jpg"
  },

  {
    nombre: "Batería",
    fechaInicio: "Inicio: 20/08",
    precio: 5800,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/bata.jpg"
  },

  {
    nombre: "Bajo Eléctrico",
    fechaInicio: "Inicio: 14/08",
    precio: 5500,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/bajo.jpg"
  },

  {
    nombre: "Violín",
    fechaInicio: "Inicio: 11/08",
    precio: 7500,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/violin.jpg"
  },

  {
    nombre: "Canto",
    fechaInicio: "Inicio: 10/08",
    precio: 5900,
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/canto.jpg"
  },
  
  
  ];

 

  crearCard();


//CARDS
function crearCard() {
  let cards=document.getElementById("swiper-wrapper");

  for(const curso of cursos){

    let card=document.createElement("div");
    card.className="card col-4 justify-content-md-center align-items-center";
    card.innerHTML=`
    <div class="card bg-primary text-black text-center p-3" style="width: 18rem;">        
    <img class="card-img-top" src=${curso.imagen} alt="${curso.nombre}">
      <div class="card-body">
        <h5 class="card-title" style="font-family: montserrat black";>${curso.nombre}</h5>
        <p class="card-text" style="font-family: montserrat";>${curso.precio}</p>
        <p class="card-text" style="font-family: montserrat";>${curso.fechaInicio}</p>
        <p class="card-text" style="font-family: montserrat";>${curso.disponibilidad}</p>
      <button id="miBoton--${curso.nombre}" class="btn btn-dark" style="font-family: montserrat";>AGERGAR AL CARRITO</button>
    </div>
  </div>
    `;
  // cards.append(card);
  }}