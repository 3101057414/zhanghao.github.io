let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
        setTimeout("alert('恭喜你打开隐藏彩蛋，美女好看吧，即将进入鸡网'), 1");
        window.location.href="turn/test.html"
    }
}

let myButton = document.querySelector('button');
let myHeanding = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeanding.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name')
    myHeanding.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// function a() {
//     let JudgeImage = myImage.getAttribute('src')
//     if(JudgeImage === 'images/firefox2.png') {

//     }
// }