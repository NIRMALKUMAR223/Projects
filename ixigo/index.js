var count = 1;
var checkFlag = true;

var content = document.getElementById('changeHading');
var child1 = document.getElementById('one');
var child2 = document.getElementById('two');
var ticket1 = document.getElementById('ticket-one');
var ticket2 = document.getElementById('ticket-two');
var ticket3 = document.getElementById('ticket-three');
var ticket4 = document.getElementById('ticket-four');
var svg = document.getElementById('svg');
var check = document.getElementById('check');
var 


(()=>{
    ticket1.style.borderBottom  = '2px solid rgb(0, 119, 255)';
})();

(()=>{
    child1.style.border = '0.5px solid rgb(0, 119, 255)';
    child1.style.border = '0.5px solid rgb(0, 119, 255)';
    child1.style.boxShadow = '0px 0px 5px 0.5px rgb(96, 96, 250)';
})()

ticket1.addEventListener('click',()=>{
    ticket1.style.borderBottom  = '2px solid rgb(0, 119, 255)';
    ticket2.style.borderBottom  = '';
    ticket3.style.borderBottom  = '';
    ticket4.style.borderBottom  = '';
});

ticket2.addEventListener('click',()=>{
    ticket2.style.borderBottom  = '2px solid rgb(0, 119, 255)';
    ticket1.style.borderBottom  = '';
    ticket3.style.borderBottom  = '';
    ticket4.style.borderBottom  = '';
});

ticket3.addEventListener('click',()=>{
    ticket3.style.borderBottom  = '2px solid rgb(0, 119, 255)';
    ticket1.style.borderBottom  = '';
    ticket2.style.borderBottom  = '';
    ticket4.style.borderBottom  = '';
});

ticket4.addEventListener('click',()=>{
    ticket4.style.borderBottom  = '2px solid rgb(0, 119, 255)';
    ticket1.style.borderBottom  = '';
    ticket2.style.borderBottom  = '';
    ticket3.style.borderBottom  = '';
});

child1.addEventListener('click',()=>{
    child1.style.color = 'rgb(0, 119, 255)';
    child1.style.border = '0.5px solid rgb(0, 119, 255)';
    child1.style.boxShadow = '0px 0px 5px 0.5px rgb(96, 96, 250)';
    child2.style.color = 'black';
    child2.style.border = '0.5px solid gray';
    child2.style.boxShadow = '';
})

child2.addEventListener('click',()=>{
    child2.style.color = 'rgb(0, 119, 255)';
    child2.style.border = '0.5px solid rgb(0, 119, 255)';
    child2.style.boxShadow = '0px 0px 5px 0.5px rgb(96, 96, 250)';
    child1.style.boxShadow = '';
    child1.style.color = 'black';
    child1.style.border = '0.5px solid gray';
})

setInterval(()=>{
    if(count==1){
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
        </svg> `
        content.textContent = 'Hassle-Free Bookings';
        count++;
    }
    else if(count==2){
        svg.innerHTML = `<svg width="1em" height="1em" font-size="1.5rem" fill="currentColor" style="user-select:none;display:inline-block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="DiscountFilledIcon" class="h-6 w-6"><path fill-rule="evenodd" d="M21 12.0001c0-.6711-.9202-1.2277-1.0597-1.8556-.144-.6483.4459-1.5573.1701-2.1423-.2803-.5947-1.3451-.6877-1.7436-1.1985-.4004-.5132-.2559-1.598-.755-2.0058-.4991-.4079-1.4973-.022-2.0783-.309-.5716-.2822-.8972-1.3243-1.5308-1.4717-.6135-.1427-1.347.6484-2.0027.6484s-1.3893-.7911-2.0029-.6484c-.6335.1474-.9591 1.1895-1.5306 1.4717-.581.287-1.5766-.101-2.0782.3088-.5015.4099-.3567 1.4952-.7551 2.006-.3985.5106-1.4633.6036-1.7436 1.1983-.2758.585.314 1.494.17 2.1424C3.9201 10.7724 3 11.3288 3 11.9999c0 .6712.92 1.2276 1.0595 1.8556.144.6483-.4458 1.5573-.17 2.1423.2803.5947 1.3451.6877 1.7436 1.1985.4004.5132.256 1.598.755 2.0058.499.4079 1.4972.0221 2.0783.309.5716.2822.8972 1.3243 1.5307 1.4717.6136.1426 1.3472-.6484 2.0029-.6484s1.3893.7911 2.0028.6484c.6336-.1474.9592-1.1895 1.5307-1.4717.5809-.2869 1.5766.101 2.0782-.3088.5015-.4099.3567-1.4952.7551-2.0059.3985-.5107 1.4633-.6037 1.7436-1.1984.2758-.5851-.314-1.494-.1699-2.1424.1393-.628 1.0595-1.1844 1.0595-1.8555Zm-5.0255-2.6213c.8105-.7927-.4187-2.0494-1.2291-1.2568l-6.6655 6.5189c-.8104.7926.4187 2.0494 1.2291 1.2568l6.6655-6.519Zm-.1751 5.1581c0 .6068-.4919 1.0987-1.0987 1.0987s-1.0987-.4919-1.0987-1.0987.4919-1.0987 1.0987-1.0987 1.0987.4919 1.0987 1.0987Zm-6.3725-3.9553c.6068 0 1.0987-.4919 1.0987-1.0987s-.4919-1.0987-1.0987-1.0987-1.0987.4919-1.0987 1.0987.492 1.0987 1.0987 1.0987Z" clip-rule="evenodd"></path></svg>`
        content.textContent = 'Best Flight Offers';
        count++;
    }
    else{
        svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>`
        content.textContent = '24x7 Customer Support'
        count-=2;
    }
},1500)

check.addEventListener('hover',()=>{
    check.style.cursor = 'pointer';
})
check.addEventListener('click',()=>{

    if(checkFlag){
        check.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>`
        checkFlag = false;
        check.style.color = 'rgb(0, 119, 255)';
    }
    else{
        check.innerHTML = ''
        checkFlag = true;
    }
})