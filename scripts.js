let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const para = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        para.innerText = `You winn! Your ${userChoice} beats ${compChoice}.`;
        para.style.backgroundColor = "green";
    }else{
        compScore++;
        comp.innerText = compScore;
        para.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
         para.style.backgroundColor = "red";
    }   
}


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random()*3);
    return options[num];
    
}
const draw = () =>{
    para.innerText = "Your match was draw.";
    para.style.backgroundColor = "#6482AD";
} 

const playGame = (userChoice) => {
    
    let compChoice = genCompChoice();
    

    if(userChoice===compChoice){
        draw();
    }else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice == "paper"? false: true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false: true;
    }else {
        userWin = compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice)
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    })
    
    
});