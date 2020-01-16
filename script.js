function codificar(){

	var vetor = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z",
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]

	var letra = document.getElementById("msg")
	var param = document.getElementById("param")

	var valorParam = Number(param.value)

	var msg = ""

         
	if(valorParam >= 0 && valorParam <= 26){

		for(var i = 0; i < letra.value.length; i++){

			var index = vetor.indexOf(letra.value[i].toLowerCase()) 
			
			var checar = letra.value.charCodeAt(i) 

			if(checar != 32){
			
				msg += vetor[index + valorParam] 
			
			}else{

				msg += " "

			}

		}

		document.getElementById("res").innerHTML = `<p>${msg}</p>`
	
	}else{

		window.alert("Por favor,insira um parâmetro entre 0 e 26")

	}

}