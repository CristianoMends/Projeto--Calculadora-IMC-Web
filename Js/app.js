
function calc(){
    
var heigth = document.getElementById("txtHeigth").value;
var weigth = document.getElementById("txtWeight").value;

var imc = new String(weigth/(heigth*heigth)).substring(0,5);


alert(imc);
}
