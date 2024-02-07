const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl = document.getElementById("btnGen");
let parEl = document.getElementById('pass');
let inputEl = document.getElementById('input');




btnEl.addEventListener('click' , passGenerator);


 
// let passLength = Number(prompt("Select The Password Range"));



function passGenerator(){
    let passLength = Number(inputEl.value);
    console.log(passLength)
    // if (randomPass == false){
     let   randomPass = '';
 for(i=0; i<passLength; i++){
   
    randomPass += characters[Math.floor(Math.random()*characters.length)];
     
 }
  parEl.textContent = randomPass;
  console.log(randomPass.length)
}

