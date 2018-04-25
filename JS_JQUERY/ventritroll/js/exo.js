// Déclaration variable
let caracteres = ["|", "/", "-", "\\"];
let essai = ["paf", "pouf"];
let index = 0;
let nbKeypress = 0;


// CSS #souffle float 
$("#souffle").css("float", "left");




$("body").on("keypress", function(){ 	//Quand on appuie sur une touche
	nbKeypress++;
	// le bonhomme souffleur apparait
	$("#souffle").css("visibility", "visible");
	// toutes les 1s les caractères apparaissent un à un
	if(nbKeypress === 1){
		setInterval(function(){
			$("#ventilo").html(caracteres[index++ % caracteres.length]);
		}, 100);
	}
}).on("keyup", function(){ //Quand on appuie plus sur la touche
	nbKeypress = 0;
	$("#souffle").css("visibility", "hidden"); 	//le bonhomme disparait
	// les caractères ne défilent plus
	
}); 


