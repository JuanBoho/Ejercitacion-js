//***Números***//


numeros=[];
var min;
var max=0;
var a;
var z=1;
//Botón ingreso
function ingreso(){

var num=prompt("Ingrese primer número: ","");

  while (Math.sign(num)!=1){
  alert("El dato ingresado no es un número y NO será guardado");
  num= Number(prompt("Ingréselo nuevamente: ",""));
  }
  numeros.push(num);
  alert("El dato se guardó correctamente");
  //botones();
  if (numeros.length>=5){
    for(i=1;i<=6;i++)
		  {
        document.getElementById('btn'+i).disabled = false;
    
       }
  }

  if(z>=2){
     /*document.getElementById('respnum_uno').innerHTML='&nbsp';
     document.getElementById('respnum_dos').innerHTML='&nbsp';
     document.getElementById('respnum_tres').innerHTML='&nbsp';
     document.getElementById('respnum_cuatro').innerHTML='&nbsp';*/
  }
}

/*function botones(){

 if (numeros.length>=5){
    for(i=1;i<=6;i++)
		  {
        document.getElementById('btn'+i).disabled = false;
    
       }
  }
}*/

//Botón número menor

function menor(){

  min=Math.min.apply(null, numeros);

  document.getElementById('respnum_uno').innerHTML=min;
  
  z=z+1;
  return(min);
  
}

//Botón número mayor

function mayor(){

  max=Math.max.apply(null, numeros);
  
  document.getElementById('respnum_dos').innerHTML=max;
  
  z=z+1;
  return(max);

}

//Botón divisor menor 
 
function divisor(){

  if (min % max===0){

     a=min;
    document.getElementById('respnum_tres').innerHTML=min;
  }

  else{
  
    for (i=2;i < min+1; i++) {

      if (max % i === 0) {
        document.getElementById('respnum_tres').innerHTML=i;
        a=i;
      }
      /*else{
        p=1;
        document.getElementById('respnum_tres') .innerHTML=p;
        a=1;
      }*/
      }
  }
  z=z+1;
}


//Botón multiplos descendentes

//

function multiplos(){
 
  multiplos=[];
 
  for(j=a;j<=max;j++){
    
    var multi =  j % a; 
    
    if(multi==0){       
      multiplos.unshift(j);
    }
  }
  
  document.getElementById('respnum_cuatro').innerHTML=multiplos.join('<br>');
  z=z+1;
}

function reset(){
  
  location.reload();

}

//----------------------------FIN EJER01--------------------------//

/*** RECETA ***/

var resi=[];

function receta(){

eggs=parseFloat(document.getElementById("huevos").value);

if(eggs<3){
   
  alert('Necesita por lo menos 3 huevos para hacer una tortilla');
}
else{
  var eggies=(eggs/3);

  resi.push(eggies);
}

pota=parseFloat(document.getElementById("papa").value);

if(pota<400){
   
  alert('Necesita por lo menos 400gr de papas para hacer una tortilla');
}
else{
  var potato=(pota/400);
  resi.push(potato);
}

onion=parseFloat(document.getElementById("cebolla").value);

if(onion<75){
   
  alert('Necesita por lo menos 75gr de cebolla para hacer una tortilla');
}
else{
  var cebo=(onion/75);
  resi.push(cebo);
}

sarten=parseInt(document.getElementById("sarten").value);

if(sarten<1){
   
  alert('Necesita por lo menos una sartén para hacer una tortilla');
}


var r=Math.min.apply(null, resi);


document.getElementById('cant_torti').innerHTML="Puede preparar "+r;

var aceite=(r*30);

document.getElementById('cant_aceite').innerHTML="Necesitará "+aceite+" ml de aceite";



var tiempo=(r*20)/sarten; //? Poner tres mensajes en función de la cantdad de tortillas(pueden ser imagenes?)


document.getElementById('tiempo').innerHTML="Necesitará "+tiempo+" min en promedio por sartén";


if (r<=3){
  document.getElementById('mensaje').innerHTML="¡Buen provecho!";
}
else if (r>3 && r<=6){
  document.getElementById('mensaje').innerHTML="¡Suficientes para disfrutar en familia!";
}
else{
  document.getElementById('mensaje').innerHTML="¡Invite a todos sus amigos!";
}
}
//----------------------------FIN EJER02--------------------------//


/*** JUEGO ***/

/* Turno*/
 var pts_ronda=0;
 var pts_acumulado1=0;
 var pts_acumulado2=0;
 var total=0;
 var cant_tiros=3;
 var rondas=5;
 var final_1;
 var final_2;
 w=3;
 
 function ronda(){
  rondas--;
  document.getElementById('rondas').innerHTML="Quedan: "+rondas+" rondas";

  document.getElementById('lanzar_uno').disabled=false;
  document.getElementById('lanzar_dos').disabled=true;
  
  cant_tiros=3;
  pts_ronda=0;
  document.getElementById("dado1").src="";
  document.getElementById("dado2").src="";
  document.getElementById("dado3").src="";

  document.getElementById('puntajetiro_1').innerHTML=" ";
  document.getElementById('puntajetiro_2').innerHTML=" ";

  pts_ronda=0;
  
  if(rondas==0){
    document.getElementById('inicio_ronda').disabled=true;
    document.getElementById('lanzar_uno').disabled=true;
    document.getElementById('lanzar_dos').disabled=true;


     if (final_1==final_2){
      alert('Hay empate'); 
      document.getElementById('desempate').style.display='block';
      document.getElementById('desempate_uno').disabled=false;
      document.getElementById('desempate_dos').disabled=false;
     }
     else if (final_1>final_2){
       alert('Ganó el jugador uno!');
     }
     else{
       alert('Ganó el jugador dos!');
     }
  }
  }

/*Lanzar dados*/

function lanzar(player){
  document.getElementsByClassName('respu').innerHTML='&nbsp';
var pts=0;
  for(i=1;i<=3;i++){

   random=Math.round(Math.random()*5)+1;
  
   document.getElementById("dado"+i).src="img/dado"+random+".png"; 

    if(random % 2!==0){

    pts=pts+random;

    }
  
  }
  document.getElementById('puntajetiro_'+player).innerHTML=pts;
   
  cant_tiros--;
  
  pts_ronda=pts_ronda+pts;
   
   
   document.getElementById('tiros_'+player).innerHTML=cant_tiros;
   document.getElementById('puntajeronda_'+player).innerHTML=pts_ronda;
   
   if (cant_tiros==0 && player==1){

    document.getElementById('lanzar_uno').disabled=true;
    document.getElementById('lanzar_dos').disabled=false;
    pts_acumulado1=pts_acumulado1+pts_ronda;
    document.getElementById('puntajeacumulado_'+player).innerHTML=pts_acumulado1;
   final_1=3;
     
    
    cant_tiros=w;
  
    pts_ronda=0;
   }
   else if(cant_tiros==0 && player==2){
    document.getElementById('lanzar_dos').disabled=true;
    pts_acumulado2=pts_acumulado2+pts_ronda;
    document.getElementById('puntajeacumulado_'+player).innerHTML=pts_acumulado2;

    final_2=3;
    cant_tiros=w;
   }
    
}


/*DESEMPATE*/
function desempate(player){
  pts_acumulado1=0;
  pts_acumulado2=0;
  pts_ronda=0;


  var pts=0;
    for(i=1;i<=3;i++){
    
     random=Math.round(Math.random()*5)+1;
     document.getElementById("dado"+i).src="img/dado"+random+".png"; 
     pts=pts+random;
    }
  
   document.getElementById('puntajetiro_'+player).innerHTML=pts;
       
       if (player==1){
    
        document.getElementById('lanzar_uno').disabled=true;
        document.getElementById('lanzar_dos').disabled=false;
       final_1=pts;
        pts_ronda=0;
       }
       else if(player==2){
        document.getElementById('lanzar_dos').disabled=true;
        final_2=pts;

        resultado();
      }

  
}

function resultado(){
  if (final_1==final_2){
    alert('Nuevo empate! Lanzen de vuelta');   
    document.getElementById('desempate_uno').disabled=false;
    document.getElementById('desempate_dos').disabled=false;
   }
   else if (final_1>final_2){
     alert('Felicidades jugador 1 ¡GANASTE!');   }
   else{
     alert('Felicidades jugador 2 ¡GANASTE!');   }
}