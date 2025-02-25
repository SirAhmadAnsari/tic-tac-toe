let boxes = document.querySelectorAll(".box");
let msg = document.getElementById('msg');
let reset = document.getElementById('btn-reset');
let newGame = document.getElementById('btn-newGame');


let count = 0 ;
let TurnO = true;

const winningPatteren=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       if (TurnO) {
        box.innerHTML="o";
        box.style.color = "blue";
        TurnO = false;
       }
       else{
        box.innerHTML="X";
        box.style.color = "red";
        TurnO=true;
       }
       count++;
       box.disabled = true;
       checkwinner();
    })
});

 
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = ""; 
    TurnO = true;
    count = 0;
});
newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = ""; 
    TurnO = true;
    count = 0;
});

function disabledBoxes() {
    boxes.forEach(box => box.disabled = true);
}

function checkwinner(){
    let isWinner = false;
    for(let pattern of winningPatteren){
        let posval = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(posval!=="" && pos2val!=="" && pos3val!==""){
            if(posval == pos2val && pos2val == pos3val){
                msg.innerText = `Winner is ${posval}`;
                disabledBoxes();
                isWinner = true;
                break;
            }
        }
    }

    // Check draw only if there is no winner
    if (!isWinner && count === 9) {
        msg.innerText = "Game Draw";
    }
}