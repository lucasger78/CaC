class Carta {
    constructor(nombre, agilidad, inteligencia, fuerza, imagen, percepcion){
      this.nombre = nombre;
      this.agilidad = agilidad;
      this.inteligencia = inteligencia;
      this.fuerza = fuerza;
      this.percepcion = percepcion;
      this.imagen = imagen;
      
    }
  }

  let cartas = [

    {
      nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
      agilidad: "Inicio: 10/08",
      inteligencia: 5000,
      fuerza: "Curso Disponible",
      percepcion: "Curso Disponible",
      imagen: src="cards/card01.jpg"
    },
  
    
    
    
    ];


crearCard();

//CARDS
function crearCard() {
    let cards=document.getElementById("cartasNews");
  
    for(const carta of cartas){
  
      let card=document.createElement("div");
      card.className="card col-4 justify-content-md-center align-items-center";
      card.innerHTML=`
      <div class="card bg-primary text-black text-center p-3 gallery" style="width: 18rem;"> 
        <div class="card-body content-gallery ">
          <img class="card-img-top img-gallery" src=${carta.imagen} alt="${carta.nombre}">
          <h5 class="card-title" style="font-family: montserrat black";>${carta.nombre}</h5>
          <p class="card-text" style="font-family: montserrat";>${carta.agilidad}</p>
          <p class="card-text" style="font-family: montserrat";>${cartaarta.inteligencia}</p>
          <p class="card-text" style="font-family: montserrat";>${carta.fuerza}</p>
          <p class="card-text" style="font-family: montserrat";>${carta.percepcion}</p>
        <button id="miBoton--${carta.nombre}" class="btn btn-dark" style="font-family: montserrat";>+ Info</button>
      </div>
    </div>
      `;
    cards.append(card);
}};