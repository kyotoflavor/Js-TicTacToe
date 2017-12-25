var player=1;
var cpt=0;
var nGrid=[];


/**
 * param (morpionCase)
 * 
 */
function joueur(morpionCase) {
    // on fait un substring pour recupere le numero de case de l'id 
    var numero = morpionCase.id.substring(4,5);
    //debug log compte tours   
    console.log(cpt)
    //on declare si une case a la classe name joueur 1 ou joueur 2
    if(morpionCase.className =='joueur1' || morpionCase.className =='joueur2'){
        //on lui attribu 
        var njoueur = morpionCase.getAttribute('jouePar'); 
        // debug log
        alert('la case ' +numero+ ' a déjà été joue par le joueur ' + njoueur);
    }
    else {
        if (player==1){
            //
            
            // applique le css de la class
            morpionCase.setAttribute("class", "joueur1");
            // applique le joueur qui a jouer la case 
            morpionCase.setAttribute("jouePar",player);
            // debug log
            console.log ("joueur "+player+" a joue la case "+numero );
            //on affiche le resultat des tours des joueurs
            document.getElementById('histo1').innerHTML += "<br>joueur "+player+" a joue la case "+numero+" au tour n° "+cpt;
            // push les valeur
            nGrid.push(player+numero);
            // debug log
            console.log(nGrid);
            // on increment le compteur a chaque click
            cpt++;
            // on passe la main au second joueur 
            player=2;
        }
        
        else if (player==2){
            // applique le css de la class
            morpionCase.setAttribute("class", "joueur2");
             // applique le joueur qui a jouer la case 
            morpionCase.setAttribute("jouePar",player);
            // debug log
            console.log ("joueur "+player+" a joue la case "+numero );
            //on affiche le resultat des tours des joueurs
            document.getElementById('histo2').innerHTML += "<br>joueur "+player+" a joue la case "+numero+" au tour n° "+cpt;
            // push les valeur
            nGrid.push(player+numero);
            // debug log
            console.log(nGrid);
            // on increment le compteur a chaque click
            cpt++;
            // on passe la main au premier joueur 
            player=1;
        }
        if(cpt>=9){
            //
            cpt=9;
            player==0;
            alert('end game');
        }
    }
    return checkWin();
}


function checkWin(){
        //ligne horizontal
        if(case0.className === "joueur1" && case1.className === "joueur1" && case2.className === "joueur1"){
  }
  else if (case3.className === "joueur1" && case4.className === "joueur1" && case5.className === "joueur1"){
  }
  else if (case6.className === "joueur1" && case7.className === "joueur1" && case8.className === "joueur1"){
   }


    //ligne vertical
    else if (case0.className === "joueur1" && case3.className === "joueur1" && case6.className === "joueur1"){
   }
    else if (case1.className === "joueur1" && case4.className === "joueur1" && case7.className === "joueur1"){
   }
    else if (case2.className === "joueur1" && case5.className === "joueur1" && case8.className === "joueur1"){
   }

   // diagonal
    else if (case0.className === "joueur1" && case4.className === "joueur1" && case8.className === "joueur1"){
   }
    else if (case2.className === "joueur1" && case4.className === "joueur1" && case6.className === "joueur1"){
   }

        //ligne horizontal
        if(case0.className === "joueur2" && case1.className === "joueur2" && case2.className === "joueur2"){
   }
  else if (case3.className === "joueur2" && case4.className === "joueur2" && case5.className === "joueur2"){
   }
  else if (case6.className === "joueur2" && case7.className === "joueur2" && case8.className === "joueur2"){
   }


    //ligne vertical
    else if (case0.className === "joueur2" && case3.className === "joueur2" && case6.className === "joueur2"){
   }
    else if (case1.className === "joueur2" && case4.className === "joueur2" && case7.className === "joueur2"){
   }
    else if (case2.className === "joueur2" && case5.className === "joueur2" && case8.className === "joueur2"){
   }

   // diagonal
    else if (case0.className === "joueur2" && case4.className === "joueur2" && case8.className === "joueur2"){
   }
    else if (case2.className === "joueur2" && case4.className === "joueur2" && case6.className === "joueur2"){
   }
return false;
}
