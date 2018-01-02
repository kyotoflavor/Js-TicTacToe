var player=1;




function test(){
var count = [];
  var cell = document.getElementsByTagName('td');
  //var gridCell = document.getElementsByTagName('td');
  for (var i = 0; i < cell.length; i++) {
      count.push(i);
      console.log (count.indexOf(count%2));
      //on convertie numCase en nombre entier
      //var numCase = parseInt(numCase);
      console.log();
  }
return count;
}


function ajouter(numCase){
  //on convertie numCase en nombre entier
  numCase = parseInt(numCase);
  console.log(ajouter);
}

/**
 * param BlocKcase
 * just block "onclick" if the player already click on this cell
 */
function joueur(BlocKcase) {
  test();
  if (player==1){
    BlocKcase.setAttribute("class", "joueur1");
    player=2;
    ajouter();
    console.log ("joueur 1" + test());

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
