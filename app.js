    // var add = document.querySelector(".add");
    // var sub = document.querySelector(".sub");
    // var number = document.querySelector(".number");
    const add_to_cart = document.querySelector(".add_to_cart");
    const enable_buttons = document.querySelector(".enable_buttons");
    // console.log(sub);
    let sum = 1;

    //  --------  if (add_to_cart){

    let cart = add_to_cart.addEventListener("click", function () {
    // removing add button after clicking on add button
    // add_to_cart.parentNode.removeChild(add_to_cart);
    //  or
    
    add_to_cart.remove();

    //  adding the buttons to the html
    const newHTMLContent = `<div class="button">
                    <button class="sub">-</button>
                    <output class="number">1</output>
                    <button class="add">+</button>
                    </div>`;
    const add_button = document.querySelector(".enable_buttons");
    add_button.innerHTML = newHTMLContent;

    
    let add = document.querySelector(".add");
    let  sub = document.querySelector(".sub");
    let  number = document.querySelector(".number");
    
    sub.disabled = true;

    add.addEventListener("click", function () {
        sub.disabled = false;
        sum++;
        console.log(sum);
        number.innerHTML = sum;
    });

    let subtracting = sub.addEventListener("click", function () {
        if (sum >= 2) {
        sum--;
        number.innerHTML = sum;
        }
        if (sum === 1) {
        sub.disabled = true;
        }
        console.log(sum);
    });
    });
