const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl = document.getElementById("btnGen");
let spanOneEl = document.getElementById('passField1');
let inputEl = document.getElementById('input');
let spanTwoEl = document.getElementById('passField2');




btnEl.addEventListener('click' , click);


 
// let passLength = Number(prompt("Select The Password Range"));



function passGenerator(){

    let passLength = Number(inputEl.value);
    // console.log(passLength)
    // if (randomPass == false){
     let   randomPass = '';
     if(passLength > 14 && passLength <26){ for(i=0; i<passLength; i++){
   
        randomPass += characters[Math.floor(Math.random()*characters.length)];
         
     }
      return randomPass;}
      else return("Please enter a value from 15 to 25");
     

//   console.log(randomPass.length)
}


function click(){
    spanOneEl.textContent = passGenerator();
    spanTwoEl.textContent = passGenerator();
}
