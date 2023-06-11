
let turnM = new Audio("./click.wav")
let winnig = new Audio("./winning.wav")
let turn = "X"
let gameOver = false

const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}
const checkWin = () =>{
let boxText = document.getElementsByClassName("textBox")
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
win.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== ''){
        document.querySelector(".turn").innerText = boxText[e[0]].innerText + " Won"
        gameOver = true
        document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px"
        winnig.play()
    }
});
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.textBox')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn();
            turnM.play();
            checkWin();
            if(!gameOver){
            document.getElementsByClassName("turn")[0].innerText =turn + "'s Turn"
            }

        }
    })
});
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.textBox')
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
        turn = "X"
        gameOver = false
        document.getElementsByClassName("turn")[0].innerText =  turn + "'s Turn"
        document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px"
    });
})