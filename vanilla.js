function verCon(e){

	alert("Valor "+e+" puntos");
}

function result() {

	  var respuesta1 = document.querySelector('input[type=radio][name=resp1]:checked');
	  var respuesta2 = document.querySelector('input[type=radio][name=resp2]:checked');
	  var respuesta3 = document.querySelector('input[type=radio][name=resp3]:checked');

	  var contador = 0;

	if(respuesta1.value == "alumnbre" ){
		document.getElementById("resultado1").innerHTML ="Correcto +10";
		document.getElementById("resultado1").style.color = "#139f43";
		contador = contador +10;
	}else{
		document.getElementById("resultado1").innerHTML ="Incorrecto es Alumnbre";
		document.getElementById("resultado1").style.color = "red";
	}

	if(respuesta2.value == "quetzal"){
		document.getElementById('resultado2').innerHTML = "Correcto +8";
		document.getElementById("resultado2").style.color = "#139f43";

		contador = contador+8;
	}else{
		document.getElementById('resultado2').innerHTML = "Incorrecto es Quetzal";
		document.getElementById("resultado2").style.color = "red";
	}

	if(respuesta3.value == "ameChiv"){

		document.getElementById('resultado3').innerHTML = "Correcto +5";
		document.getElementById("resultado3").style.color = "#139f43";

		contador = contador + 5;
	}else{
		document.getElementById('resultado3').innerHTML = "Incorrecto es America vz Chivas";
		document.getElementById("resultado3").style.color = "red";
	}


		document.getElementById('puntuacion').innerHTML ="Tu puntuacion total es de: "+contador;
}

function result1() {

	  var respuesta1 = document.querySelector('input[type=radio][name=resp1]:checked');
	  var respuesta2 = document.querySelector('input[type=radio][name=resp2]:checked');
	  var respuesta3 = document.querySelector('input[type=radio][name=resp3]:checked');

	  var contador = 0;

	if(respuesta1.value == "rusia" ){
		document.getElementById("resultado1").innerHTML ="Correcto +12";
		document.getElementById("resultado1").style.color = "#139f43";
		contador = contador +12;
	}else{
		document.getElementById("resultado1").innerHTML ="Incorrecto es Rusia";
		document.getElementById("resultado1").style.color = "red";

	}

	if(respuesta2.value == "SnakeVenom"){
		document.getElementById('resultado2').innerHTML = "Correcto +15";
		document.getElementById("resultado2").style.color = "#139f43";
		contador = contador +15;
	}else{
		document.getElementById('resultado2').innerHTML = "Incorrecto es Snake Venom";
		document.getElementById("resultado2").style.color = "red";
	}

	if(respuesta3.value == "no"){

		document.getElementById('resultado3').innerHTML = "Correcto +5";
		document.getElementById("resultado3").style.color = "#139f43";
		contador = contador +5;
	}else{
		document.getElementById('resultado3').innerHTML = "Incorrecto, no se deveria";
		document.getElementById("resultado3").style.color = "red";
	}

	document.getElementById('puntuacion').innerHTML ="Tu puntuacion total es de: "+contador;
}

