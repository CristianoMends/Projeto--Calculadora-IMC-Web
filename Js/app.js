function calc(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso/(altura*altura);
    var fimc = imc.toFixed(2);
    
    if(altura > 0 && peso > 0){
    window.alert("O seu Indice de massa corporal é "+fimc);
    
    if(fimc < 25 && fimc > 18){
        window.alert("Seu imc esta regular!");
    }
    if(fimc < 18){
        window.alert("Você está abaixo do peso!");
    }
}else{
    window.alert("Digite um valor valido!")
}
}

