var player=1;


/**
 * en test
 */
function morpion(){

var gridCount = [];
var gridCell = document.getElementsByTagName('td');
var gridRow = document.getElementsByTagName('tr');;
var gridCounting = gridCell * gridRow;


for (var i = 0; i < gridCell.length; i++) {
    gridCell.push(i);
    console.log(gridCell);
  }
    for (var j = 0; j < gridRow.length; j++) {
      gridRow.push(j);
      console.log(gridRow);
  }
}

/**
 * param BlocKcase
 * juste bloque le clique du joueur si un joueur a deja rempli une case
 */
function joueur(BlocKcase) {
  if (player==1){
    BlocKcase.setAttribute("class", "joueur1");
    player=2;
    console.log ("joueur 1");
  }
  else if (player==2){
    BlocKcase.setAttribute("class", "joueur2");
    player=1;
    console.log ("joueur 2");
  }
  BlocKcase.onclick=function(){
    return false;
  };
}
