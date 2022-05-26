'use strict';


let secertNumber=Math.trunc((Math.random() * 20) + 1);
let score=20;
let highScore=0;

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay')
const btnCloseModel=document.querySelector('.close-modal');




//to avoid duplication

const displayMessage= function(message){

    document.querySelector('.message').textContent=message;
}

const displayScore=function(score){
    document.querySelector('.score').textContent=score;
}




document.querySelector(".check").addEventListener('click',function(){
    
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(!guess){
       
        displayMessage("guess a number first !!")

    }

    else if(guess === secertNumber){
        document.querySelector(".number").textContent=secertNumber;
        
        displayMessage("sucess!! Correct number");

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

        document.querySelector('body').style.backgroundColor="GREEN";
        document.querySelector('.number').style.width="30rem"


    }
    //restucter the code for worng case(inc low and high in one block)
    else if(guess != secertNumber){
        if(score>1)
        {
            //document.querySelector('.message').textContent=guess>secertNumber?"it's high":"it's low";
            displayMessage(guess>secertNumber?"it's high":"it's low");

        score--;
        displayScore(score);
        }else{
            displayMessage("U loose the game");
            displayScore(0);
            document.querySelector('body').style.backgroundColor="RED";
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");


            
        }

    }
    // //when high
    // else if(guess > secertNumber){
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent="too high";
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent="U loose the game";
    //         document.querySelector('.score').textContent=0;
    //         document.querySelector('body').style.backgroundColor="RED";
    //     }
        
    // }
    // //when low
    // else if(guess < secertNumber){
    //     if(score>1)
    //     {
    //         document.querySelector('.message').textContent="too low";
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }else{
    //         document.querySelector('.message').textContent="U loose the game";
    //         document.querySelector('.score').textContent=0;
    //         document.querySelector('body').style.backgroundColor="RED";
        
    //     }

    // }
})

document.querySelector('.again').addEventListener('click',function(){

    secertNumber=Math.trunc((Math.random() * 20) + 1);
    score=20;
    displayMessage("guess a number broo");
    displayScore(score);
    document.querySelector('body').style.backgroundColor="BLACK";
    document.querySelector('.number').style.width="15rem"
    document.querySelector('.number').textContent="?"
    
})



const colseModel=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
btnCloseModel.addEventListener('click',colseModel);
overlay.addEventListener('click',colseModel);