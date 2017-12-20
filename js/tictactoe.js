//


var debut = 1;


function joueur1() {
  var joueur1 = 1;
  if (joueur1 = 1){
    document.getElementById("case").className += "joueur1";
  }
  else{
    joueur1 = 0;
    joueur2 = 1;
  }
}

function joueur2() {
  var joueur2 = 1;
  if (joueur2 = 1){
  document.getElementById("case").className += "joueur2";
  }
  else{
    joueur2 = 0;
    joueur1 = 1;
  }

}

function jou1jou2() {
  if(debut=1){
    document.getElementById("case").addEventListener( 'click', joueur1());
  }
  else {
    joueur2();
  }
}
