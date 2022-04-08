let botScore = 0;
let playerScore = 0;
let botScorenow = document.getElementById('bot-score');
let playerScorenow = document.getElementById('player-score');
let playerName = '';
let winSound = new Audio('./assets/sounds/win.mp3');
let loseSound = new Audio('./assets/sounds/lose.mp3');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playerName').innerHTML = 
    playerName == '' ? 'Player' : playerName;
});

class BOT {
    constructor(){
        this.botChoose = '';
        this.playerChoose = '';
        this.result = '';
    }

    getBotChoice(){
        let random = Math.floor(Math.random() * 3);
        switch(random){
            case 0:
                this.botChoose = 'batu';
                break;
            case 1:
                this.botChoose = 'kertas';
                break;
            case 2:
                this.botChoose = 'gunting';
                break;
        }
    }

    getPlayerChoice(choice){
        this.playerChoose = choice;
    }

    getResult(){
        if(this.playerChoose == this.botChoose){
            this.result = 'SERI';
        }else if(this.playerChoose == 'batu' && this.botChoose == 'kertas'){
            this.result = 'BOT MENANG';
        }else if(this.playerChoose == 'batu' && this.botChoose == 'gunting'){
            this.result = `Yeay, ${playerName} MENANG`;
        }else if(this.playerChoose == 'kertas' && this.botChoose == 'batu'){
            this.result = `Yeay, ${playerName} MENANG`;
        }else if(this.playerChoose == 'kertas' && this.botChoose == 'gunting'){
            this.result = 'BOT MENANG';
        }else if(this.playerChoose == 'gunting' && this.botChoose == 'batu'){
            this.result = 'BOT MENANG';
        }else if(this.playerChoose == 'gunting' && this.botChoose == 'kertas'){
            this.result = `Yeay, ${playerName} MENANG`;
        }
    }
}

function clickHandler(event){
    if(playerName == '' || playerName == 'Player'){
        playerName = prompt('Masukkan nama kamu');
        document.getElementById('playerName').innerHTML = 
        playerName == '' ? 'Player' : playerName;
    }
    let res = document.getElementById('res');
    let botChooseIMG = document.getElementById('result-item-bot');
    botChooseIMG.src = '';
    let playerChooseIMG = document.getElementById('result-item-player');
    playerChooseIMG.src = '';
    res.style.display = 'none';
    
    let playerChoice = event.id;
    let bot = new BOT();
    bot.getPlayerChoice(playerChoice);
    bot.getBotChoice();
    bot.getResult();
    console.log(bot);
    
    let loading = document.createElement('img');
    loading.src = './assets/images/loading.gif';
    loading.style = 'width: 100px; height: 100px;';
    res.parentElement.appendChild(loading);   

    setTimeout(() => {
        loading.remove();
        botChooseIMG.src = './assets/images/' + bot.botChoose + '.png';
        playerChooseIMG.src = './assets/images/' + bot.playerChoose + '.png';

        if(bot.result == 'SERI'){
            loseSound.play();
            res.innerHTML = 'SERI';
            res.style.color = '#fff';
            res.style.backgroundColor = '#000';
            res.style.border = '1px solid #000';
            res.style.borderRadius = '5px';
            res.style.padding = '10px';
            res.style.fontSize = '20px';
            res.style.fontWeight = 'bold';
            res.style.textAlign = 'center';
            res.style.marginTop = '20px';
            res.style.marginBottom = '20px';
            res.style.display = 'block';
        }else if(bot.result == 'BOT MENANG'){
            loseSound.play();
            res.innerHTML = 'BOT MENANG';
            res.style.color = '#fff';
            res.style.backgroundColor = '#000';
            res.style.border = '1px solid #000';
            res.style.borderRadius = '5px';
            res.style.padding = '10px';
            res.style.fontSize = '20px';
            res.style.fontWeight = 'bold';
            res.style.textAlign = 'center';
            res.style.marginTop = '20px';
            res.style.marginBottom = '20px';
            res.style.display = 'block';
            botScore++;
            botScorenow.innerHTML = botScore;
        }else if(bot.result == `Yeay, ${playerName} MENANG`){
            winSound.play();
            res.innerHTML = `Yeay, ${playerName} MENANG`;
            res.style.color = 'white';
            res.style.backgroundColor = 'green';
            res.style.border = '1px solid #000';
            res.style.borderRadius = '5px';
            res.style.padding = '10px';
            res.style.fontSize = '20px';
            res.style.fontWeight = 'bold';
            res.style.textAlign = 'center';
            res.style.marginTop = '20px';
            res.style.marginBottom = '20px';
            res.style.display = 'block';
            playerScore++;
            playerScorenow.innerHTML = playerScore;
        }
    }, 3000);
}