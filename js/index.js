
//*counter*//
let counterDisplayElem = document.querySelector('.counter-display ');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');
let resetBtn = document.querySelector('.reset');
let count = 0;

updateDisplay();

//*plus button*//

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
});

//*minus button*//

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
    
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

//*reset button*//  
          
resetBtn.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
   
})
