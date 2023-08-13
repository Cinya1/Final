let $caja = document.getElementById('caja');
//generos
let $mujerB = document.getElementById('mujer')
let $hombresB = document.getElementById('hombres')
let $todosB = document.getElementById('todos')
//paginas
let $siguienteB = document.getElementById('siguiente')
let $ultimaPaginaB = document.getElementById('ultimaPagina')
let $anteriorB = document.getElementById('anterior')
let $primerBoton = document.getElementById('primerBoton')

// let personajesInfo = []; variable para buscar cada personaje
let todosPersonajes =[];
let pagina = 1;
let total=0;

function mostrar (array){
    $caja.innerHTML = '';
    for(let i=0; i<array.length; i++){
        $caja.innerHTML += `<div class="tarjeta">
        <div class="card-imagen"><img src= ${array[i].image}></div>
        <div class="card-contenido">
         <h2>Nombre: ${array[i].name}</h2>
         <p>Genero: ${array[i].gender}</p>
         <p>Especie: ${array[i].species}</p>
         <p>Status: ${array[i].status}</p>
         <p>Origen: ${array[i].origin.name}</p>
         <p>Locación: ${array[i].location.name}</p>
        </div>
        <div class="enlace"> <a href="">Ver más</paraa>
        </div>

    </div>`
    }

}
// function cadaPersonaje (infoPersonaje){
//     fetch(`https://rickandmortyapi.com/api/character/2=${infoPersonaje}`)
//     .then ((data)=>{
//         return data.jason();
//     })
// .then((data)=>{
//     personajesInfo = data.results;
//     mostrar(personajesInfo);     hay que ver para que dirija a cadapersonaje

// });
// }
// usarFetch(pagina);


function usarFetch (numeroPagina){
  fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
.then((data)=>{
    return data.json();
})

.then((data)=>{
  todosPersonajes = data.results;
    mostrar(todosPersonajes);
    
});
  
}
usarFetch(pagina);

function mostrarMujeres (){
    let resultado = todosPersonajes.filter((personaje)=> {
         return personaje.gender === 'Female';
     })
     mostrar(resultado);
 };
 
 $mujerB.addEventListener('click', mostrarMujeres)

 function mostrarHombres (){
    let resultado = todosPersonajes.filter((personaje)=> {
         return personaje.gender === 'Male';
     })
     mostrar(resultado);
 };
 $hombresB.addEventListener('click', mostrarHombres)

function todos (){
    let resultado = todosPersonajes.filter((personaje)=> {
         return personaje.gender;
     })
     mostrar(resultado);
 }
 $todosB.addEventListener('click',todos)

 function siguientePagina (){
    if(pagina===42){
        return
    }
    pagina++;
    if(pagina===2){
       $anteriorB.disabled = false
    } else if(pagina===42){
        $siguienteB.disabled = true;
    } else
    {
        $siguienteB.disabled = false
    } 
    usarFetch(pagina);
    }
 $siguienteB.addEventListener('click',siguientePagina)

 function anteriorPagina (){
    if (pagina===1){
        return
    }
    pagina--;
    console.log(pagina)
   if(pagina===1){
        $anteriorB.disabled = true;
    } else
    {
        $anteriorB.disabled = false;
    } 
    usarFetch(pagina);
    }
$anteriorB.addEventListener('click',anteriorPagina)

 function ultimaPagina (){
    pagina=42;
    $siguienteB.disabled = true
    $anteriorB.disabled=false
    usarFetch(pagina);
    }
    
$ultimaPaginaB.addEventListener('click',ultimaPagina)

function primerBoton(){
    pagina=1
    $anteriorB.disabled = true
    $siguienteB.disabled = false
    usarFetch(primerBoton)
    }   
    
$primerBoton.addEventListener('click',primerBoton)
//  llamar al botoon y conectarlo $ultimaPaginaB.addEventListener('click',42)
