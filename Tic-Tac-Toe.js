let boxes =  document.querySelectorAll(".Button");
let winContainer = document.querySelector("#Winner");
let win = document.querySelector(".Name");
let newGame = document.querySelector("#New");


let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

 boxes.forEach ((Button) => {
    Button.addEventListener ("click", () => {
        console.log ("Box Was Clicked");
        if (turnO) {
            Button.innerHTML = "O";
            turnO = false;
        } else {
            Button.innerHTML = "X";
            turnO = true;
        }
        Button.disabled = true;
        checkWinner();
    });
 });

 const showWinner = (Winner) => {
    win.innerHTML = `Congratulations, The winner is ${Winner}`;
    winContainer.classList.remove("hide");
    for (let Box of boxes) {
        Box .disabled = true;
    }
 };

 
 const checkWinner = () => {
     for (let Pos of winPatterns) {
         let Val0 = boxes[Pos[0]].innerHTML;
         let Val1 = boxes[Pos[1]].innerHTML;
         let Val2 = boxes[Pos[2]].innerHTML;
         
         if (Val0 != "" && Val1 != "" && Val2 != "") {
             if (Val0 === Val1 && Val1 === Val2) {
                 console.log ("Winner", Val1);
                 showWinner (Val0);
                }
            }
        }
    };
    
document.getElementById('New').addEventListener('click' , () => {
location.reload();
});