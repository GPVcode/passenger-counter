// document.getElementById("count-el").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count (h2)
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
}
//Create a function, save(), which logs out the count when it's called
function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


//if save gets clicked, lkcount = 0