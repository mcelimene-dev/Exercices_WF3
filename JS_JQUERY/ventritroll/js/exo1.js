// Quand on presse sur une touche l'image apparait
let p = 0;
jQuery("#souffle").css("float", "left");
jQuery("body").on("keypress", function(){
	jQuery("#souffle").css("visibility", "visible");
	jQuery("#ventilo").text(tableau[p%4], function(){
		setTimeOut(function(){ p++; }, 3000);
	});

}).on("keyup", function(){
	jQuery("#souffle").css("visibility", "hidden");
});

// Caractères pour afficher le ventilo
let tableau = ["|", "/", "-", "\\"];

// Fonction qui ressort un caractère en fonction de son positionnement dans le tableau
/*function affichageVentilo(caractere){
	let ventilo = jQuery("#ventilo");
	return jQuery(ventilo).text(tableau[caractere]);
}*/



/* 	var cnt = 0;
setInterval(function(){
cnt ==4 ? cnt=0:cnt++
    $("#ventilo").fadeOut(0, function(){
        var tableau = ["|", "/", "-", "\\"];
        var rand = tableau[cnt];
        $('#ventilo').html(rand);
        $("#ventilo").fadeIn(0);
    });
},200); */
