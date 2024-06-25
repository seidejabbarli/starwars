let introPage = document.querySelector(".first-container");
let secondPage = document.querySelector(".second-container");
let firstLine = document.querySelector(".first-line");
let thirdPage = document.querySelector(".third-container");
let thirdLayout = document.querySelector(".third-layout");
let startBtn = document.querySelector(".start-btn");
let myChoice = document.querySelector(".my-choice");
let enemy = document.querySelector(".enemy");
let myChoiceImg = document.querySelector(".my-choice-img");
let enemyImg = document.querySelector(".enemy-img");
let aboutMyChoice = document.querySelector(".about-mychoice");
let aboutEnemy = document.querySelector(".about-enemy");
let revan = document.querySelector(".revan");
let starkiller = document.querySelector(".starkiller");
let nihilus = document.querySelector(".nihilus");
let malak = document.querySelector(".malak");
let sion = document.querySelector(".sion");
let malgus = document.querySelector(".malgus");
let bastila = document.querySelector(".bastila");
let myChoiceName = document.querySelector(".mychoice-name");
let myChoicePower = document.querySelector(".mychoice-power");
let myChoiceHealth = document.querySelector(".mychoice-health");
let enemyName = document.querySelector(".enemy-name");
let enemyPower = document.querySelector(".enemy-power");
let enemyHealth = document.querySelector(".enemy-health");
let fightBtn = document.querySelector(".fight-btn");
let beatBtn = document.querySelector(".beat-btn");
let player1 = document.querySelector(".player1-img");
let player2 = document.querySelector(".player2-img");
let infoPlayer1 = document.querySelector(".info-player1");
let infoPlayer2 = document.querySelector(".info-player2");
let userChoice = false;
let compChoice = false;
let beatBtnClick = false;
let width1 = 200;
let width2 = 200;
let widthMyChoice = document.querySelector(".width-hero-layout");
let widthEnemy = document.querySelector(".width-enemy-layout");
let wonPage = document.querySelector(".won-page");
let winnerText = document.querySelector(".winner-text");
let gameOverBtn = document.querySelector(".game-over-btn");

startBtn.onclick = function(){
    introPage.style.display = "none";
    secondPage.style.display = "block";
};

revan.onclick = function(){
    console.log("klik oldu")
    if(userChoice == false){
        myChoiceImg.append(revan);
        userChoice = revan;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice !=revan){
        enemyImg.append(revan);
        compChoice = revan;
        learnInfoComp(this);
    }
}


starkiller.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(starkiller);
        userChoice = starkiller;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice !=starkiller){
        enemyImg.append(starkiller);
        compChoice = starkiller;
        learnInfoComp(this);
    }
}

nihilus.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(nihilus);
        userChoice = nihilus;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice !=nihilus){
        enemyImg.append(nihilus);
        compChoice = nihilus;
        learnInfoComp(this);
    }
}



malak.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(malak);
        userChoice = malak;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice != malak){
        enemyImg.append(malak);
        compChoice = malak;
        learnInfoComp(this);
    }
}



sion.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(sion);
        userChoice = sion;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice !=sion){
        enemyImg.append(sion);
        compChoice = sion;
        learnInfoComp(this);
    }
}


malgus.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(malgus);
        userChoice = malgus;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice != malgus){
        enemyImg.append(malgus);
        compChoice = malgus;
        learnInfoComp(this);
    }
}

bastila.onclick = function(){
    if(userChoice == false){
        myChoiceImg.append(bastila);
        userChoice = bastila;
        learnInfoUser(this);
    }
    else if( compChoice == false && userChoice != bastila){
        enemyImg.append(bastila);
        compChoice = bastila;
        learnInfoComp(this);
    }
}

function learnInfoUser(e){
     myChoice.style.opacity = 1;
     myChoiceName.innerText = e.dataset.name;
     myChoiceHealth.innerText = e.dataset.health;
     myChoicePower.innerText = e.dataset.power;
};

function learnInfoComp(e){
    enemy.style.opacity = 1;
    fightBtn.style.opacity = 1
    enemyName.innerText = e.dataset.name;
    enemyHealth.innerText = e.dataset.health;
    enemyPower.innerText = e.dataset.power;
};


fightBtn.onclick = function(){
    if(compChoice != false){
         secondPage.style.display= "none";
         thirdPage.style.display= "block";
         player1.append(userChoice);
         player2.append(compChoice);
         infoPlayer1.append(aboutMyChoice);
         infoPlayer2.append(aboutEnemy);
    }
}

beatBtn.onclick = function(){
     if(beatBtnClick == false){

        var x = setInterval(()=>{
          let hit1 = Math.floor(Math.random()* userChoice.dataset.power);
          let hit2 = Math.floor(Math.random()* compChoice.dataset.power);
           width1 -= hit1;
           width2 -= hit2;
           widthMyChoice.style.width = `${width1}px`;
           widthEnemy.style.width = `${width2}px`;
           myChoiceHealth.innerText = width1;
           enemyHealth.innerText = width2;

           if(width1 <= 0){
               widthMyChoice.style.display = "none";
               myChoiceHealth.innerText = 0;
               clearInterval(x);
               setTimeout(()=> {
                thirdLayout.style.display = "none";
                wonPage.style.display = "block";
                winnerText.innerText = `${compChoice.dataset.name} is winner!`;
               },2000)

           } else if( width2 <= 0){
            widthEnemy.style.display = "none";
            enemyHealth.innerText = 0;
            clearInterval(x);
            setTimeout(()=> {
             thirdLayout.style.display = "none";
             wonPage.style.display = "block";
             winnerText.innerText = `${userChoice.dataset.name} is winner!`;
            },2000)

           }

        },2000)
     }
    beatBtnClick = true;
}

gameOverBtn.onclick = function(){
    window.location.reload();
}