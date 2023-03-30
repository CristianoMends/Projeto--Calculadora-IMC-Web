function calculateImc(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let imc = weight/(height*height).toFixed(2);
    
   // window.alert(imc);
    
       if(imc <= 18.5) {
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";

       }else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";

       }else if(imc >= 25 && imc <= 29.9){
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";
        
       }else if(imc >= 30 && imc <= 34.9){
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";
        
       }else if(imc >= 35 && imc <= 39.9){
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";
        
       }else if(imc >= 40){
        document.getElementById("result").style.display = "block";
        document.getElementById("captionImg").innerHTML = "<p>Seu IMC:"+imc.toFixed(1)+"</p>";

       }
    
}
