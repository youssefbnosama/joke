let url = `https://v2.jokeapi.dev/joke/Any?type=single`
let btn = document.getElementById(`btn`)
let jokee = document.getElementById(`joke`)
btn.onclick = function(){
    fetch(url).then((result) =>{
         result = result.json()
         return result
    }).then((result) =>{
        jokee.innerHTML = result.joke
    })
}