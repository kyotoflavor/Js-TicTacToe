var player=1;
var cpt=0;
var victoire=false;
var abandon=false;
var score = [{
      score_P1 : 0
    },{
      score_P2 : 0
    }];


/**
 * param (morpionCase)
 *
 */
function joueur(morpionCase) {
    // on fait un substring pour recupere le numero de case de l'id
    var numero = morpionCase.id.substring(4,5);
    //on declare si une case a la classe name joueur 1 ou joueur 2
    if(morpionCase.className =='joueur1' || morpionCase.className =='joueur2'){
        //on lui attribu
        var njoueur = morpionCase.getAttribute('jouePar');
        // debug log
        alert('la case ' +numero+ ' a déjà été joue par le joueur ' + njoueur);
    }
    else {
        if (player==1){
            // applique le css de la class
            morpionCase.setAttribute("class", "joueur1");
            // applique le joueur qui a jouer la case
            morpionCase.setAttribute("jouePar",player);
            //on affiche le resultat des tours des joueurs
            document.getElementById('histo1').innerHTML += "<br>joueur "+player+" a joue la case "+numero+" au tour n° "+cpt;
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
            //on affiche le resultat des tours des joueurs
            document.getElementById('histo2').innerHTML += "<br>joueur "+player+" a joue la case "+numero+" au tour n° "+cpt;
            // on increment le compteur a chaque click
            cpt++;
            // on passe la main au premier joueur
            player=1;
        }
    }
    if(cpt>8){
        disp_draw();
        }
      if (victoire == true) {
        disp_win();
        //alert("La partie est terminée! Le joueur "+joueur.numero+" a gagné!");
        }
    return checkWin();
}

function checkWin(score){
        //ligne horizontal
        if(case0.className === "joueur1" && case1.className === "joueur1" && case2.className === "joueur1"){  disp_win_p1();
  }
  else if (case3.className === "joueur1" && case4.className === "joueur1" && case5.className === "joueur1"){  disp_win_p1();
  }
  else if (case6.className === "joueur1" && case7.className === "joueur1" && case8.className === "joueur1"){  disp_win_p1();
   }


    //ligne vertical
    else if (case0.className === "joueur1" && case3.className === "joueur1" && case6.className === "joueur1"){  disp_win_p1();
   }
    else if (case1.className === "joueur1" && case4.className === "joueur1" && case7.className === "joueur1"){  disp_win_p1();
   }
    else if (case2.className === "joueur1" && case5.className === "joueur1" && case8.className === "joueur1"){  disp_win_p1();
   }

   // diagonal
    else if (case0.className === "joueur1" && case4.className === "joueur1" && case8.className === "joueur1"){  disp_win_p1();
   }
    else if (case2.className === "joueur1" && case4.className === "joueur1" && case6.className === "joueur1"){  disp_win_p1();
   }


        //ligne horizontal
        if(case0.className === "joueur2" && case1.className === "joueur2" && case2.className === "joueur2"){  disp_win_p2();
   }
  else if (case3.className === "joueur2" && case4.className === "joueur2" && case5.className === "joueur2"){  disp_win_p2();
   }
  else if (case6.className === "joueur2" && case7.className === "joueur2" && case8.className === "joueur2"){  disp_win_p2();
   }


    //ligne vertical
    else if (case0.className === "joueur2" && case3.className === "joueur2" && case6.className === "joueur2"){  disp_win_p2();
   }
    else if (case1.className === "joueur2" && case4.className === "joueur2" && case7.className === "joueur2"){  disp_win_p2();
   }
    else if (case2.className === "joueur2" && case5.className === "joueur2" && case8.className === "joueur2"){  disp_win_p2();
   }

   // diagonal
    else if (case0.className === "joueur2" && case4.className === "joueur2" && case8.className === "joueur2"){  disp_win_p2();
   }
    else if (case2.className === "joueur2" && case4.className === "joueur2" && case6.className === "joueur2"){  disp_win_p2();
   }

   return false;
}

function disp_win_p1() {
    if (victoire=true){
        document.getElementById("win_div").style.visibility = "visible";
        document.getElementById("win_div").innerHTML = '<blink><br>Le joueur 1 a gagné! <br><img style="height: auto; width: auto;" src="css/i-win-you-lose.png"/> </blink><br> <button onclick="fermer()">Relancer la partie</button>';
    }
  }

  function disp_win_p2() {
    if (victoire=true){
        document.getElementById("win_div").style.visibility = "visible";
        document.getElementById("win_div").innerHTML = '<br>Le joueur 2 a gagné! <br><img style="height: auto; width: auto;" src="css/i-win-you-lose.png"/> <br> <button onclick="fermer()">Relancer la partie</button>';
    }
  }

 function disp_draw() {
    if (draw=true){
        document.getElementById("win_div").style.visibility = "visible";
        document.getElementById("win_div").innerHTML = '<br>draw game! <br><img style="height: auto; width: auto;" src="css/draw.png"/> <br> <button onclick="fermer()">Relancer la partie</button>';
    }
  }

  /*Fonction du bouton fermer */
function fermer() {
  if (document.getElementById("win_div").style.visibility = "visible") {
      document.getElementById("win_div").style.visibility = "hidden";
      window.location.reload(true);
  }
}


function abandon_test(){
  if (abandon=true){
    document.getElementById("win_div").style.visibility = "visible";
    document.getElementById("win_div").innerHTML = '<br>abandon game! <br><button onclick="fermer()">Relancer la partie</button>';

  }
}
