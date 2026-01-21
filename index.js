let user_score=document.querySelector(".user-score");
let comp_score=document.querySelector(".comp-score");
let statement=document.querySelector(".statement");
let options = document.querySelectorAll(".options img");
let userscore = 0;
let compscore = 0;


const gencompchoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx].id;


}
const drawgame = () => {
    console.log("draw!! play again.");
    statement.style.backgroundColor = "black";
}
const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        user_score.innerText = userscore;
        statement.innerText = `your ${userchoice} beats computer ${compchoice}`;
        statement.style.backgroundColor = "green";
    } else {
        compscore++;
        comp_score.innerText = compscore;
        statement.innerText = `computer ${compchoice} beats your ${userchoice}`;
        statement.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    console.log(compchoice);

    if (userchoice == compchoice) {
        drawgame();
    }
    let userwin = true;
    if (userchoice == "rock") {
        //scissors, paper
        userwin = compchoice == "scissors" ? true : false;
    } else if (userchoice == "paper") {
        userwin = compchoice == "rock" ? true : false;
    } else {
        userwin = compchoice == "paper" ? true : false;
    }
    showwinner(userwin, userchoice, compchoice);

    
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userchoice = option.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    });
});