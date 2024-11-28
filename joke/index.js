const url='https://official-joke-api.appspot.com/random_joke'

async function joke(){
    const data=await fetch(url)
    const datason=await data.json()
    const {setup,punchline}=datason
    document.getElementById('joke').textContent=`${setup}`+ " :) "
    document.getElementById('answer').textContent=punchline+" 😂"
}
joke()