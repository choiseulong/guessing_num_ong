var answerNumber = Math.floor(Math.random() * 100) + 1;
var guessHistory = document.querySelector('.guessHistory');
// 클래스네임 앞에 . 을 적고 불러옴?
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var guessCount = 1;

function checkYourNumber() {
    var userGuess = Number(guessForm.value);

    if (guessCount === 1) {
        guessHistory.textContent = '입력한 숫자 : ';
    }
    // === 은 type 까지 같아야하는 엄격한 비교연산자
        guessHistory.textContent += userGuess + ' ';

    if ( userGuess == "" || userGuess == null){
        yesOrNo.textContent = '0 혹은 빈칸 말고 1~100 사이의 수를 입력해 주세요.';
        guessHistory.textContent = '입력한 숫자 : ';
        highOrLow.textContent = '';
        guessForm.value = '';
        guessForm.focus();
        yesOrNo.style.backgroundColor = 'red';
    } else if ( isNaN(userGuess)== true ) {
        guessHistory.textContent = '입력한 숫자 : ';
        yesOrNo.textContent = '문자 말고 1~100 사이의 수를 입력해 주세요';
        highOrLow.textContent = '';
        guessForm.value = '';
        guessForm.focus();
        yesOrNo.style.backgroundColor = 'red';
    } else if (userGuess > 100 || userGuess < 1) {
        guessHistory.textContent = '입력한 숫자 : ';
        yesOrNo.textContent = '1이상 100이하의 수를 입력해 주세요';
        guessForm.focus();
        highOrLow.textContent = '';
        guessForm.value = '';
        yesOrNo.style.backgroundColor = 'red';
    }  else {
        if (userGuess === answerNumber) {
            yesOrNo.textContent = '정답이에요';
            yesOrNo.style.backgroundColor = 'blue';
            highOrLow.textContent = '';
            setGameOver();
        } else if (guessCount === 10){
                yesOrNo.textContent = '실패 다시 도전해봐요.';
                highOrLow.textContent = '';
                setGameOver();
        } else {
                yesOrNo.textContent = '틀렸습니다!';
                yesOrNo.style.backgroundColor = 'red';
                if (userGuess < answerNumber) {
                highOrLow.textContent = '정답은 더 큰 수 입니다.';
                guessForm.focus();
                } else if (userGuess > answerNumber) {
                    highOrLow.textContent = '정답은 더 작은 수 입니다.';
                    guessForm.focus();
                        }
                } 
                guessCount++;
                // ++ 은 1씩추가해준다는 것.
                guessForm.value = '';
        }
}

    guessButton.addEventListener('click', checkYourNumber);

    var restartButton;

    function setGameOver() {
        guessForm.disabled = true;
        guessButton.disabled = true;
        restartButton = document.createElement('button');
        restartButton.textContent = '새 게임 하기';
        document.body.appendChild(restartButton);
        restartButton.addEventListener('click', restartGame);
        // 새게임 버튼 만드는 method
        }
    function restartGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultDiv p')
    //p 를 모두 불러와주는거?
    for (var i=0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
        //for 문 돌면서 쌓였던걸 지워준다.
    }
    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value = '';
    guessForm.focus();
    yesOrNo.style.backgroundColor = 'white';
    answerNumber = Math.floor(Math.random() * 100 ) +1;
    // 0~1 사이에 소수를 불러오기떄문에 * 100 해주는거
    }
