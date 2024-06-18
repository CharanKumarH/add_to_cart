const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const number  = document.querySelector(".number");
const add_to_cart = document.querySelector(".add_to_cart")

let sum = 1;
sub.disabled = true;

let adding = add.addEventListener("click", function(){
    
    sum++;
    console.log(sum);
    number.innerHTML = sum;
    sub.disabled = false;
});


let subtracting = sub.addEventListener("click", function(){
if (sum >= 2){
    sum--;
    number.innerHTML = sum;
}if(sum === 1){
    sub.disabled = true;
}
console.log(sum);
});


let cart = add_to_cart.addEventListener("click", function(){
    sum = 1;
    number.innerHTML = sum;
    cart.disabled = true;
}
)
