let imgActuelle;
let idImgActuelle;
let numeroImgActuelle;

let imgSuivante;
let numeroImgSuivante;

let slideActuel;
let slideSuivant;

function suivant(){
	// On regarde sur quelle image est la classe actuelle et on prend son numero
	imgActuelle = $(".actuelle").each(function(){ this.id });
	idImgActuelle = imgActuelle.attr("id");
	numeroImgActuelle = parseInt(idImgActuelle.substr(3));
	slideActuel = $(".slide#slide" + String(numeroImgActuelle));
	numeroImgSuivante = numeroImgActuelle + 1;

	if(numeroImgSuivante > 5){
		numeroImgSuivante = 1;
	}
	// On met enlève la classe actuelle à l'image actuelle
	imgSuivante = $("img#img" + String(numeroImgSuivante));
	slideSuivant = $("div#slide" + String(numeroImgSuivante));

	// On met la classe actuelle à l'image suivante et on l'enlève à classe actuelle
	imgActuelle.removeClass("actuelle");
	imgSuivante.addClass("actuelle");

	slideActuel.removeClass("slideActuel");
	slideSuivant.addClass("slideActuel");

}

function precedent(){
	// On regarde sur quelle image est la classe actuelle et on prend son numero
	imgActuelle = $(".actuelle").each(function(){ this.id });
	idImgActuelle = imgActuelle.attr("id");
	numeroImgActuelle = parseInt(idImgActuelle.substr(3));
	slideActuel = $(".slide#slide" + String(numeroImgActuelle));
	numeroImgSuivante = numeroImgActuelle - 1;

	if(numeroImgSuivante < 1){
		numeroImgSuivante = 5;
	}
	// On met enlève la classe actuelle à l'image actuelle
	imgSuivante = $("img#img" + String(numeroImgSuivante));
	slideSuivant = $("div#slide" + String(numeroImgSuivante));
	// On met la classe actuelle à l'image suivante et on l'enlève à classe actuelle
	imgActuelle.removeClass("actuelle");
	imgSuivante.addClass("actuelle");

	slideActuel.removeClass("slideActuel");
	slideSuivant.addClass("slideActuel");

}

/* ********** Changement d'image ********** */

// Clic de la souris
$("#suivant").on("click", suivant);
$("#precedent").on("click", precedent);

// Toutes les 5s
//setInterval(suivant, 5000);

// Clic sur le slider
$(".slide").on("click",function(){
	imgActuelle = $(".actuelle").each(function(){ this.id });
	idImgActuelle = imgActuelle.attr("id");
	numeroImgActuelle = parseInt(idImgActuelle.substr(3));
	let ancienSlide = $("#slide" + String(numeroImgActuelle));

	let slideClic = $(this);
	let idSlideClic = $(this).attr("id");
	let numeroSlideClic = parseInt(idSlideClic.substr(5));

	ancienSlide.removeClass("slideActuel");
	slideClic.addClass("slideActuel");

	imgSuivante = $("img#img" + String(numeroSlideClic));

	imgActuelle.removeClass("actuelle");
	imgSuivante.addClass("actuelle");
});


// Avec les flèches
$(document).on("keypress", function(e){
	if(e.keyCode == 37){
		precedent();
	} else if(e.keyCode == 39){
		suivant();
	} else {

	}
});

$(document).on('mousewheel', function(e) {
    if(e.deltaY == 1){
    	suivant();
    } else {
    	precedent();
    }
}); 

