let s=document.querySelectorAll('.select')
let btn=document.getElementById('btn')
fetch("https://www.frankfurter.app/currencies/").then((res)=>{
    return res.json()
}).then((res)=>{
    currency(res)
})
function currency(res){
    const arr=Object.entries(res)
    for(let i=0;i<arr.length;i++){
        const op=`<option value="${arr[i][0]}">${arr[i][0]}</option>`
        s[0].innerHTML+=op
        s[1].innerHTML+=op
    }
}
btn.addEventListener('click',()=>{
    let s1=s[0].value
    let  s2=s[1].value
    let amount=document.getElementById('amount').value
    let rt=document.getElementById('result')
    let a=document.getElementById('alert')
    const host = 'api.frankfurter.app';
    if(s1===s2){a.textContent="currency are equal"}
    else{
        a.textContent=""
    }
    fetch(`https://${host}/latest?amount=${amount}&from=${s1}&to=${s2}`)
    .then(resp =>  resp.json())
    .then((resp) => {
        const a=Object.entries(resp)[3][1]
        const r=Object.values(a)[0]
        console.log(r)
        rt.value=r
    });
})