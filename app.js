const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const number  = document.querySelector(".number");
const add_to_cart = document.querySelector(".add_to_cart")

let sum = 0;

let adding = add.addEventListener("click", function(){
    
    sum++;
    console.log(sum);
    number.innerHTML = sum;
});


let subtracting = sub.addEventListener("click", function(){
if (sum >= 2){
    sum--;
    number.innerHTML = sum;
}
console.log(sum);
});


let cart = add_to_cart.addEventListener("click", function(){
    sum = 1;
    number.innerHTML = sum;
}
)
