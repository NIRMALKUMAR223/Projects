var count = 2;
var imgChanger = document.getElementById('change');
setInterval(()=>{
    if (count ==1){
        imgChanger.src = './banner/loader1.jpg';
        count++;
    }
    else if ( count == 2){
        imgChanger.src = './banner/loader2.jpeg';
        count++;
    }
    else if ( count == 3){
        imgChanger.src = './banner/loader3.jpeg';
        count++;
    }
    else if ( count == 4){
        imgChanger.src = './banner/loader4.jpg';
        count++;
    }
    else if ( count == 5){
        imgChanger.src = './banner/loader5.jpg';
        count++;
    }
    if (count == 5){
        count = 1; 
    }    
},1800)


var cart = document.getElementById('cart-part');
var cartItems = document.getElementById('cart');
var close = document.getElementById('span');
console.log(cart);

cart.addEventListener('click',()=>{
    cartItems.style.display = 'flex';
})

close.addEventListener('click',()=>{
    cartItems.style.display = 'none'
})