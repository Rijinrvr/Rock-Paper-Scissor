const touch = document.getElementById("btn");
const RPSval = document.getElementById("inpt");
const x = RPSval.value;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const array = ["ROCK", "PAPER", "SCISSOR"];
const deflt_usr = array[Math.floor(Math.random() * array.length)];
const DRAW = "OH NO...YOU HAD DRAW.";
const Player_Wins = "HAPPIEEEE!!!!! YOU WON.";
const Computer_Wins = "HA HA HA!!! YOU LOST.";


const user_choice =(x)=>{
    const selection = x.toUpperCase();
    
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
        confirm(`wrong choice!!! we chose ${deflt_usr} for u `);
        return deflt_usr;
    }
    return selection;
}
const computer_choice =()=>{
    const values = Math.floor(Math.random() * 3) + 1;
    if (values == 1) {
        return ROCK;
    } else if (values == 2) {
        return PAPER;
    } else {
        return SCISSOR;
    }
}
const winner =  (user_choice, computer_choice)=> {
    if (user_choice === computer_choice) {
        return DRAW;
    } else if (user_choice === PAPER && computer_choice === ROCK || user_choice === SCISSOR && computer_choice === PAPER || computer_choice === SCISSOR && user_choice === ROCK) {
        return Player_Wins;
    } else {
        return Computer_Wins;
    }
}


const alertme = () => {
    
}
touch.addEventListener('click', ()=> {
    console.log("starting..");
    const playerselection = user_choice(x);
    console.log(playerselection);
    const cchoice = computer_choice();
    console.log(cchoice);
    const result = winner(playerselection, cchoice);
    console.log(result);

    let msg = `You picked ${playerselection}, and computer picked ${cchoice}, therefore you `;

    if (result === DRAW) {
        msg = msg + DRAW;
    } else if(result === Player_Wins) {
        msg = msg + Player_Wins;
    } else {
        msg = msg + Computer_Wins;
        
    }
    confirm(msg);
    

});


