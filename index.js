
let counter=0
let displayText = document.getElementById("text")

function add(){
    counter++
    displayText.innerHTML = "Student Enter " + counter

}
function stop(){
    counter=0
    displayText.innerHTML = "No Student Enter start again" 

}