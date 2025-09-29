const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");
var space_Modal = document.getElementsByClassName("modal")[0];
var charval = 0, paraval = 0, numberval = 0;
let timer,
      maxTime =30,
      timeLeft = maxTime,
      chartype = charIndex = mistakes = isTyping = 0;
      $( document ).ready(function() {
          
        $('.inputtextarea').on('click', function() {
            $('input').focus();
        });
        
        
      });
function loadParagraph() {
    if (charval == 2) {
        const ranIndex = Math.floor(Math.random() * paragraphs2.length);
        typingText.innerHTML = "";
        paragraphs2[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`
            //console.log(char);
            //var h1 = char;
            var h1 = char;
            var originalQueue = h1.innerHTML;
            var queue = h1.innerHTML;
            //console.log(char);
            //console.log(h1);
            typingText.innerHTML += span;
        });
    } else if (paraval == 1) {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        typingText.innerHTML = "";
        paragraphs[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`
            //console.log(char);
            //var h1 = char;
            var h1 = char;
            var originalQueue = h1.innerHTML;
            var queue = h1.innerHTML;
            //console.log(char);
            //console.log(h1);
            typingText.innerHTML += span;
        });

    }
    else if (numberval == 3) {
        const ranIndex = Math.floor(Math.random() * paragraphs3.length);
        typingText.innerHTML = "";
        paragraphs3[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`
            //console.log(char);
            //var h1 = char;
            var h1 = char;
            var originalQueue = h1.innerHTML;
            var queue = h1.innerHTML;
            //console.log(char);
            //console.log(h1);
            typingText.innerHTML += span;
        });
    }
    else {

        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        typingText.innerHTML = "";
        paragraphs[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`
            //console.log(char);
            //var h1 = char;
            var h1 = char;
            var originalQueue = h1.innerHTML;
            var queue = h1.innerHTML;
            //console.log(char);
            //console.log(h1);
            typingText.innerHTML += span;
        });

    }
    // console.log(typingText.querySelectorAll("span")[0].innerHTML);
    keyvalue = typingText.querySelectorAll("span")[0].innerHTML;
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());

}


function initTyping() {
    let characters = typingText.querySelectorAll("span");
    //console.log(characters.length);
    let typedChar = inpField.value.split("")[charIndex];
    //console.log(charIndex);
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                chartype--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                //console.log(characters[charIndex].innerText);
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
            chartype++;
            //console.log(chartype);
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        //console.log(characters[charIndex].innerText); //imp 
        keyvalue = characters[charIndex].innerText
        //console.log(keyvalue);
        //let code = keyvalue.charCodeAt();
        //console.log(code);
        //getKey(code);




        let wpm = Math.round(((chartype - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = chartype - mistakes;
    } else {
        if (charIndex == characters.length - 1 && timeLeft > 0) {
            if (isTyping == true) {
                timer = setInterval(initTimer, 1000);
            }
            if (timeLeft <= 0) {
                scoreresult();
                clearInterval(timer);
            }
            charIndex = 0;
            //console.log(charIndex);
            loadParagraph();
            inpField.addEventListener("input", initTyping);
            //inpField.value = "";
        }

        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((chartype - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        scoreresult();
        //console.log(timeLeft);

        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    chartype = charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);

function setfunction() {
    maxTime = document.getElementById("timerInput").value >= 0 ? Number(document.getElementById("timerInput").value) : 60;
    timeLeft = maxTime;
    document.getElementById("inputfieldvalue").style.display = "block";
    document.getElementById("wrapper2").style.display = "None";
    document.getElementById('inputfieldvalue').value = ''
    //alert("Hello! I am an alert box!");
}
function pressKey(char) {
    window.addEventListener('keydown', function (e) {
        key.removeAttribute('data-pressed');
        var code = char.charCodeAt();
        if (char == "!" || char == "@" || char == "#" ||
            char == "$" || char == "%" || char == "~") {
            selectorr.removeAttribute('data-pressed');
        }
        else if (char == "^" ||
            char == "&" || char == "*" || char == "(" || char == ")" ||
            char == "_" || char == "+" || char == ":" || char == '"' ||
            char == "<" || char == ">" || char == "?") {
            selectorl.removeAttribute('data-pressed');
        }
        if (code > 64 && code < 91) {
            if (char == "A" || char == "S" || char == "D" || char == "F" ||
                char == "G" || char == "Q" || char == "W" || char == "E" ||
                char == "R" || char == "T" || char == "Z" || char == "X" ||
                char == "C" || char == "V" || char == "B") {
                selectorr.removeAttribute('data-pressed');
            } else if (char == "Y" || char == "U" || char == "I" || char == "O" ||
                char == "P" || char == "H" || char == "J" || char == "K" ||
                char == "L" || char == "N" || char == "M") {
                selectorl.removeAttribute('data-pressed');
            }
        }
    });

    var code = char.charCodeAt();
    if (char == "!" || char == "@" || char == "#" ||
        char == "$" || char == "%" || char == "~") {
        selectorr = document.querySelector('[data-key*="' + 16 + '-R"]');
        selectorr.setAttribute('data-pressed', 'on');
    }
    else if (char == "^" ||
        char == "&" || char == "*" || char == "(" || char == ")" ||
        char == "_" || char == "+" || char == ":" || char == '"' ||
        char == "<" || char == ">" || char == "?") {
        selectorl = document.querySelector('[data-key*="' + 16 + '-L"]');
        selectorl.setAttribute('data-pressed', 'on');
    }
    //console.log(code);
    if (code > 64 && code < 91) {
        if (char == "A" || char == "S" || char == "D" || char == "F" ||
            char == "G" || char == "Q" || char == "W" || char == "E" ||
            char == "R" || char == "T" || char == "Z" || char == "X" ||
            char == "C" || char == "V" || char == "B") {
            selectorr = document.querySelector('[data-key*="' + 16 + '-R"]');
            selectorr.setAttribute('data-pressed', 'on');
        } else if (char == "Y" || char == "U" || char == "I" || char == "O" ||
            char == "P" || char == "H" || char == "J" || char == "K" ||
            char == "L" || char == "N" || char == "M") {
            selectorl = document.querySelector('[data-key*="' + 16 + '-L"]');
            selectorl.setAttribute('data-pressed', 'on');
        } else {
            selectorr = document.querySelector('[data-key*="' + 16 + '-R"]');
            selectorr.setAttribute('data-pressed', 'on');
            selectorl = document.querySelector('[data-key*="' + 16 + '-L"]');
            selectorl.setAttribute('data-pressed', 'on');
        }
    }


    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    //console.log(char);
    key.setAttribute('data-pressed', 'on');

}


function scoreresult() {
    $.getJSON('/monkey_typing', {
        hitss: (Math.round(((chartype - mistakes) / 5) / (maxTime - timeLeft) * 60)),
        ttimer: maxTime,
        mistakess: (((chartype - mistakes) * 100 / chartype).toFixed(2)),
    }, function (data) {
        $("#result").text(data.result);
    });
    space_Modal.style.display = "flex";
    if (maxTime < 60) {
        $(".maxTimescore").text(maxTime);
        $("#timer-name").text("sec");
    }
    else {
        $(".maxTimescore").text((maxTime / 60).toFixed(0));
        $("#timer-name").text("Min");
        $("#timer-after").text(":00");
    }
    $(".mistakesscore").text(mistakes);
    $(".wpmscore").text(Math.round(((chartype - mistakes) / 5) / (maxTime - timeLeft) * 60));
    $(".cpmscore").text(chartype - mistakes);
    $(".accuracyscore").text(((chartype - mistakes) * 100 / chartype).toFixed(2));
}

document.addEventListener('DOMContentLoaded', () => {
    var keyboard = document.querySelector('.keyboard');
    var hands = document.querySelector('.hands');

    function size() {
        if (!keyboard) return; // safeguard
        var size = keyboard.parentNode.clientWidth / 90;
        keyboard.style.fontSize = size + 'px';
    }

    function size1() {
        if (!hands) return; // safeguard
        var size = hands.parentNode.clientWidth / 90;
        hands.style.fontSize = size + 'px';
    }

    window.addEventListener('resize', size);
    window.addEventListener('resize', size1);

    size();
    size1();
});

document.addEventListener('DOMContentLoaded', () => {
    var header = document.getElementById("myDIV");
    if (!header) return; // stop if element doesn't exist

    var btns = header.getElementsByClassName("btn10");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active1");
            if(current[0]) { // safeguard
                current[0].className = current[0].className.replace(" active1", "");
            }
            this.className += " active1";
        });
    }
});

function charcontent() {
    keyremovebtn();
    charval = 2;
    numberval = paraval = 0;
    resetGame();
}

function paracontent() {
    //alert(charval);
    keyremovebtn();
    charval = 0;
    numberval = 0;
    paraval = 1;
    resetGame();
}

function numbercontent() {
    //alert(charval);
    keyremovebtn();
    charval = 0;
    numberval = 3;
    paraval = 0;
    resetGame();
}
function keyremovebtn() {
    var key1 = document.querySelector('[data-char*="' + keyvalue.toUpperCase() + '"]');
    // console.log(key1);
    key1.removeAttribute('data-pressed');
    selectorr = document.querySelector('[data-key*="' + 16 + '-R"]');
    selectorr.removeAttribute('data-pressed');
    selectorl = document.querySelector('[data-key*="' + 16 + '-L"]');
    selectorl.removeAttribute('data-pressed');
}

var myWindow;

function newwindow() {
    myWindow = window.open("/google-login", "", "left=600px, top=150px, width=400, height=550");
}