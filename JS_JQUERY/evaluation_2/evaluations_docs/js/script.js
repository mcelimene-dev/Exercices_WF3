
/********** FORMULAIRE **********/
let bouton = $("button");

// Evenement quand on clique sur le bouton d'envoi du formulaire
bouton.on("click", function(e){
	e.preventDefault();
	/* Message d'erreur et bordure du champ en rouge si le nom du chat n'est pas selectionné */
	$("#aideSelect").text("");
	$("#choix").css("border", "1px solid #ced4da");
	let selectNomChat = $("#choix").val();
	if(selectNomChat == null){
		$("#aideSelect").text("Veuillez sélectionner le nom d'un chat").css({"font-size": "0.8em", "color": "red"});
		$("#choix").css("border", "1px solid red");
	}

	/* Message d'erreur et bordure du champ en rouge la raison de l'adoption n'existe pas ou ne dépasse aps 15 caractères */
	let raisonMessage = $("#raison");
	$("#aideMessage").text("");
	raisonMessage.css("border", "1px solid #ced4da");
	if(raisonMessage.val() == "" || raisonMessage.val().length < 15){
		console.log(raisonMessage.val());
		$("#aideMessage").text("Veuillez écrire un message de plus de 15 caractères").css({"font-size": "0.8em", "color": "red"});
		raisonMessage.css("border", "1px solid red");
	}

	// On remplace le formulaire par un message de validation quand tout est validé 
	if(selectNomChat != null && raisonMessage.val() != "" && raisonMessage.val().length >= 15){
		$("form").remove();
		$("#messageValidationForm").append("<div class='alert alert-success' role='alert'>Message d'adoption envoyé !</div>");
	}
});

/********** PRESENTATION *********/
let zonePresentation = $("#presentation");

/* Evenement quand on survole la zone - Changement couleur tête du chat lorque la souris survole la zone*/
zonePresentation.on("mouseover", function(){
	$("#teteChat").css("background-color", "#061339");
}).on("mouseleave", function(){
	$("#teteChat").css("background-color", "#7885A5");
});