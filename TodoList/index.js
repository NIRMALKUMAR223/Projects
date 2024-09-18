var inputValue = document.getElementById('input');
var btn = document.getElementById('btn');
var mainContent = document.querySelector('.tasks');
var mark = document.querySelector('span');


btn.addEventListener('click',()=>{
    if(inputValue.value){
        let divMain = document.createElement('div');
        divMain.classList.add('formate-task');
        let textHeading = document.createElement('h5');
        let inputText = inputValue.value;
        textHeading.textContent = `${inputText}`;
        divMain.appendChild(textHeading);
        let xMark = document.createElement('span');
        xMark.textContent = "❌";
        xMark.classList.add('remove-task');
        divMain.appendChild(xMark);
        mainContent.appendChild(divMain);
        inputValue.value="";
        xMark.addEventListener('click', () => {
            divMain.remove();
        });
    }
    else{
        document.getElementById('res').textContent="Note is required !"
    }
});


inputValue.addEventListener('keypress',(event)=>{
    if(event.key=="Enter"){
        btn.click();
    }
});


