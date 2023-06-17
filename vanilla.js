function validaMexico(){
  
  var valor1 = document.querySelector('input[type=radio][name=p1]:checked');
  var valor2 = document.querySelector('input[type=radio][name=p2]:checked');
  var valor3 = document.querySelector('input[type=radio][name=p3]:checked');
  
  var contador = 0; 
  
  if(valor1.value != null){
    
    document.getElementById("resultado1").innerHTML ="Respuesta: Francisco González Bocanegra y Jaime Nunó";
    
    if(valor1.value == 'Francisco González Bocanegra  y Jaime Nunó'){

        document.getElementById("respuesta1").innerHTML = "Correcto";
        document.getElementById("respuesta1").style.color = "rgb(69, 255, 66)";
        contador = contador +1;

    }else{

        document.getElementById("respuesta1").innerHTML = "Incorrecto";
        document.getElementById("respuesta1").style.color = "#fa0202";
    }
    
    
    
  }
  
  
  
  
  if(valor2.value != null){
    
    document.getElementById("resultado2").innerHTML ="Respuesta: Catrina";
    
    if(valor2.value == 'Catrina'){

        document.getElementById("respuesta2").innerHTML = "Correcto";
        document.getElementById("respuesta2").style.color = "rgb(69, 255, 66)";
        contador = contador +1;

    }else{
        document.getElementById("respuesta2").innerHTML = "Incorrecto";
        document.getElementById("respuesta2").style.color = "#fa0202";
    }
  }
  
  
  if(valor3.value != null){
    
      document.getElementById("resultado3").innerHTML ="Respuesta: Quetzal";
    
     if(valor3.value == 'Quetzal'){
    
        document.getElementById("respuesta3").innerHTML = "Correcto";
        document.getElementById("respuesta3").style.color = "rgb(69, 255, 66)";
        contador = contador +1;

    }else{
        document.getElementById("respuesta3").innerHTML = "Incorrecto";
        document.getElementById("respuesta3").style.color = "#fa0202";
    }
  }
  
  document.getElementById('puntuacion').innerHTML ="Tu puntuacion total es de: "+contador;
  
  
}


function validaSeries(){

  
  var valor1 = document.querySelector('input[type=radio][name=p1]:checked');
  var valor2 = document.querySelector('input[type=radio][name=p2]:checked');
  var valor3 = document.querySelector('input[type=radio][name=p3]:checked');
  
  
var contador = 0; 
  
  if(valor1.value != null){
    
    document.getElementById("resultado1").innerHTML ="Respuesta: Emilia Clarke";
    
    if(valor1.value == 'Emilia Clarke'){
      
      document.getElementById("respuesta1").innerHTML = "Correcto";
      document.getElementById("respuesta1").style.color = "rgb(69, 255, 66)";
      contador = contador +1;

      }else{

          document.getElementById("respuesta1").innerHTML = "Incorrecto";
          document.getElementById("respuesta1").style.color = "#fa0202";
    }    
  }
  
 if(valor2.value != null){
  
      document.getElementById("resultado2").innerHTML ="Respuesta: Janice";

     if(valor2.value == 'Janice'){

       document.getElementById("respuesta2").innerHTML = "Correcto";
       document.getElementById("respuesta2").style.color = "rgb(69, 255, 66)";
       contador = contador +1;

    }else{
        document.getElementById("respuesta2").innerHTML = "Incorrecto";
        document.getElementById("respuesta2").style.color = "#fa0202";
    }
  }
  
  if(valor3.value != null){
    
      document.getElementById("resultado3").innerHTML ="Respuesta: Coraline";

      if(valor3.value == 'Coraline'){

          document.getElementById("respuesta3").innerHTML = "Correcto";
          document.getElementById("respuesta3").style.color = "rgb(69, 255, 66)";
          contador = contador +1;

      }else{
          document.getElementById("respuesta3").innerHTML = "Incorrecto";
          document.getElementById("respuesta3").style.color = "#fa0202";
      }
  }
  
  document.getElementById('puntuacion').innerHTML ="Tu puntuacion total es de: "+contador;
  
}

