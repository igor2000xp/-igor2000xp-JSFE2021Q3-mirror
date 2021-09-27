/* form scripts */

let buttonBuy = document.querySelectorAll('.button-buy'),
   ticketsForm = document.getElementById('ticketsForm'),
   closeButton = document.querySelectorAll('.close');
   

   
   buttonBuy.forEach((element) => {
      element.addEventListener("click", buyScript);
    });

function buyScript(){
   ticketsForm.classList.add("show");
}

function closeForm(){
   ticketsForm.classList.remove("show");
}

/* image scripts */

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

let firstList = document.querySelectorAll('.random_picture img');
var index = 0, length = firstList.length;
for ( ; index < length; index++) {   
   firstList[index].style.order = getRandomInt(100);   
}

