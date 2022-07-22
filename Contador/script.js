
let count = 0;
let box_number = document.querySelector(".box-number");
let bnts = document.querySelectorAll(".bnt");

bnts.forEach(function (bnt) {
    
    bnt.addEventListener('click', function (e) { 
        const styles = e.currentTarget.classList;
        console.log(e.currentTarget.classList);
         if (styles.contains("Decremantar")) {
             count--;

         } else if (styles.contains("Incremantar")) {
             count++;

         } else {
             count = 0;
         }
         box_number.textContent = count;
     });
})