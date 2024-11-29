var sidebarImg = document.querySelectorAll('.img');
var cartImg = document.querySelectorAll('.cart-img');
var heading4 = document.querySelectorAll('.h4');

fetch('https://fakestoreapi.com/products')
.then((res)=>{
    res.json().then((data)=>{        
        for (let i = 0; i < sidebarImg.length; i++){
            sidebarImg[i].src = data[i].image;
            cartImg[i].src = data[i].image;
            heading4[i].textContent = data[i].title;
        }
    })
})