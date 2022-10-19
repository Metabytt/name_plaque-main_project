

const userLetterPreviw = document.querySelector('.plaque-prev');
const userPricePreviw = document.querySelector('#plaquePrice');
const userButton = document.querySelector(".buy-submit");



const buyNow=() => {
    
    var usrInputVal = document.querySelector('.field-input').value;
   if (usrInputVal == "") {
    document.querySelector('.notification').textContent="Please enter your name";
    document.querySelector('.notification').style.color="red"
   }
   else if(usrInputVal == 'ALABI' || usrInputVal == 'Alabi' || usrInputVal == 'alabi'){
    document.querySelector('.notification').textContent="Please Enter A Different Name"
    document.querySelector('.notification').style.color="yellow"
   }
   else if (usrInputVal.length >15 ){
    document.querySelector('.notification').textContent="Maximum Character is 15";
    document.querySelector('.notification').style.color="red"
   }
  else {
    document.querySelector('.notification').textContent="Your Name Is Successful Recorded";
    document.querySelector('.notification').style.color="#00838F"
  }
 
}

userButton.addEventListener("click",buyNow )