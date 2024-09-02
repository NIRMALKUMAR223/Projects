function hello(){
    var one=document.querySelector('.one')
    var two=document.querySelector('.three')
    var three=document.querySelector('.five')
    var day=document.querySelector('.day')
    let time= new Date()
    let d=`Date : ${time.getDate()}/ ${time.getMonth()}/ ${time.getFullYear()}`;
    let hour=time.getHours().toString().length==1?"0"+time.getHours():time.getHours();
    let minutes=time.getMinutes().toString().length==1?"0"+time.getMinutes():time.getMinutes();
    let second=time.getSeconds().toString().length==1?"0"+time.getSeconds():time.getSeconds();
    one.textContent=hour;
    two.textContent=minutes;
    three.textContent=second;
    day.textContent=d;
}
setInterval(hello ,1000)