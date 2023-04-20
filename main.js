// 랜덤번호 지정 1~100
// 유저가 번호 입력, go라는 버튼을 누름
// 만약에 유저가 랜덤 번호 맞추면, 맞췄습니다!
// 랜덤 번호 < 유저 번호, Down!!!
// 랜덤 번호 > 유저 번호, UP!!
// Reset 누르면 버튼이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼 disable)
// 유저 1~100 범위 밖의 숫자 입력하면 알려준다. 기회 깎지 않는다.
// 유저가 이미 입력한 숫자 또 입력하면 알려준다. 기회 깎지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-button")
let inputButton = document.getElementById("input-button")
let result = document.getElementById("result")
let resetButton = document.getElementById("reset-button")
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances")
let history = [];

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
inputButton.addEventListener("focus", function(){
    inputButton.value=""; 
});
 
function pickNum(){
    computerNum = Math.floor(Math.random() * 100) + 1 
    console.log(computerNum);
}

pickNum()

function play(){
    let userValue = inputButton.value
// 유효성 검사
    if(userValue < 1 || userValue > 100){
        result.textContent = "1과 100사이의 숫자를 입력하세요"
        return; // chances를 깎지 않고 함수를 종료시키기 위해 
    }
    if(history.includes(userValue)){
        result.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    chances --;
    chancesArea.textContent=`남은기회:${chances}번`

    if(userValue < computerNum){
        result.textContent = "UP"
    }else if(userValue > computerNum){
        result.textContent = "Down"
    }else if(userValue = computerNum){
        result.textContent= "정답입니다."
        gameOver = true
    }

    history.push(userValue);

    if(chances < 1){
        gameOver = true
    }

    if(gameOver == true){
        playButton.disabled = true
    }
}

function reset(){
    pickNum();
    result.textContent = "결과창"
    chances = 5
    chancesArea.textContent = `남은 찬스 : ${chances}번`
    playButton.disabled = false;
}


