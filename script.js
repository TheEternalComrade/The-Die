const number = document.getElementById("number")
const result = document.getElementById("result")
const generateBtn = document.getElementById("generatebtn")
const list = ["potato", "popotato", "popopotato","popopopotato"]
let ranInt

generateBtn.addEventListener("click", generateNumber)

function generateNumber(){
    ranInt = Math.floor(Math.random()*4)
    number.textContent = ranInt
    result.textContent = list[ranInt]
}


