var player=1;



/**
 * param BlocKcase
 * juste bloque le clique du joueur si un joueur a deja rempli une case
 */
function joueur(BlocKcase) {
    var numero = BlocKcase.id.substring(4,5);
    if(BlocKcase.className=='joueur1' || BlocKcase.className=='joueur2'){
        var njoueur = BlocKcase.getAttribute('jouePar'); 
        alert('la case '+numero+'a déjà été joueur ' + njoueur);
    } else {
        if (player==1){
            BlocKcase.setAttribute("class", "joueur1");
            BlocKcase.setAttribute("jouePar",player);
            
            console.log ("joueur "+player+" a joue la case "+numero );
            player=2;
        }
        else if (player==2){
            BlocKcase.setAttribute("class", "joueur2");
            BlocKcase.setAttribute("jouePar",player);
            console.log ("joueur "+player+" a joue la case "+numero );
            BlocKcase.setAttribute("jouePar",player);
            player=1;
        }
    }
    return;
}

/*
if case click on retourne un element 
    si cette element conteint la classe joueur 1 ou joueur 2 
    alors la case est jouer 
    sinon 
    on peut affectuer la case */
