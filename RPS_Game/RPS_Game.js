let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("msg");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);// it will generate less then three 0 /1 /2 
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw  ");
    msg.innerText="Game was draw play again";


}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win")
        msg.innerText="You Win "
    }
    else{
        console.log("You Lose")
        msg.innerText=("You lose")
    }
}

const playGame=(userChoice)=>{
    console.log("user choice  =  " ,userChoice);
    //Generatecomputer choice
    const compChoice=genCompChoice();
    console.log("comp choice  =  " , compChoice);
    if(userChoice===compChoice){
        // Drow Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
          //scissors, paper
          userWin=compChoice==="paper"? false : true;
        }
        else if (userChoice==="paper"){
            // rock , scissors
           userWin= compChoice==="scissors"? false : true;
        }
        else{
            // rock , paper
          userWin=  compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id")
        // console.log("choice was clicked    ", userChoice);
        playGame(userChoice);
    })
})

