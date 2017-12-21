
    function Initialisation() {
        joueurs = ['0', '1'];
        //Et le joueur qui commence
        joueur = joueurs[0];
    }



    function jouer(zone) { //Recupère le nom de la zone cliquée via "zone"
        //Si le joueur et egale au joueur 'X'
        if (joueur === joueurs[0]) {
            if (document.getElementById(zone).className.indexOf('joueur1') >= 0) {
                joueurs[1].onclick = null;
               } else {
                //Sinon on definit le background de la case
                document.getElementById(zone).className = "joueur1";
                //On passe la main au joueur 1
                joueur = joueurs[1];
            }
        }
        else if (joueur === joueurs[1]) { //Si le joueur et egale au joueur 'O'
            if (document.getElementById(zone).className.indexOf('joueur2') >= 0) {
                //On affiche un alerte
              joueurs[0].onclick = false;
            } else {
                //Sinon on definit le background de la case avec l'image Rond
                document.getElementById(zone).className = "joueur2";
                //On passe la main au joueur 2
                joueur = joueurs[0];
            }
        }
        //On fait un check :)
      //  checking();
    }
