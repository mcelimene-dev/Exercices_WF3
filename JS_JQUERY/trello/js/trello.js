/* *****************************  Variables ***************************** */
let boutonAjoute = $("#ajoutTache");
let nbCartes = 1;
/* *****************************  Fonctions ***************************** */
// Création de la carte 
function trello(){
	// On récupère les valeurs du formulaire
	let nomTache = $("#nomTache").val();
	let dateLimite = $("#dateLimite").val();

	// Si nomTache et date Limite sont renmplis alors on créée la carte
	if(nomTache && dateLimite){
		// On créée la carte
		let carteCreation = $("#aFaire").append("<li><div class='card text-center carte'><div class='card-body'><p class='card-text'>" + nomTache + "</p><div class='card-footer'><small class='text-muted'> Jusqu'au " + dateLimite + "</small></div><button type='button' class='delete btn btn-outline-light'><i class='far fa-trash-alt'></i></button></div></div></li>");

		// Action pour déplacer la carte
		$("ul").sortable({
			connectWith: ".taches"
		});

		$(".delete").on("click", function(){
			$(this).parents("li").remove();
		});

		/***** LocalStorage *****
		if(!localStorage){ 
			return false;
		}

		let datas = {}; 
		let ls = false; 
		datas.href = window.location.href;
		datas["Carte n°"] = nbCartes++;

		if(localStorage["carteCreation"]){ 
			ls = JSON.parse(localStorage['carteCreation']);
			if(ls.href == datas.href){ 
				for(let id in ls){ 
					if(id != "href") { 
						$("#" + id).val(ls[id]);
						datas[id] = ls[id];
					}
				}
			}
		}


		$("input").each(function(){
			datas[$(this).attr('id')] = $(this).val();
		});


		localStorage.setItem('carteCreation', JSON.stringify(datas));
		console.log(localStorage);*/

	}
}

/* *****************************  Script ***************************** */
// Quand on ajoute une tâche une carte s'affiche dans la colonne "A Faire"
boutonAjoute.on("click", trello);
console.log(localStorage);
















