let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let mess = document.querySelector("#mess");

let turno = true;


const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
];

 const resetgame = () => {
    turno = true;
    enable();
    msg.classList.add("hide");

 };
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turno){
            box.innerText ="O";
            turno=false;
        }
        else{
            box.innerText ="X";
            turno=true;
        }
      box.disabled = true;
      winner();  
    })
});

const disable = () => {

    for(let boxx of boxes)
        {
            boxx.disabled = true;
        }
};


const enable = () => {

    for(let boxx of boxes)
        {
            boxx.disabled =false;
           boxx.innerText="";
        }
};

const showWinner = (win) => {
    mess.innerText = `Congratulations, winner is ${win}`;
    msg.classList.remove("hide");
    disable();
};
const winner=() => {
    for(pattern of arr){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "")
        {
            if(val1 == val2 && val2 == val3)
                {
                    
                    showWinner(val1);
                   
                }
        }
    }
};
reset.addEventListener("click", resetgame);