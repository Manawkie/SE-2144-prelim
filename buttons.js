const currDisplay = document.querySelector("#display")


const greetings = [
    // Indo-European Languages
    "Hello boss", // English
    "Hola boss", // Spanish
    "Bonjour boss", // French
    "Hallo boss", // German
    "Ciao boss", // Italian
    "Здравствуйте boss", // Russian
    "नमस्ते boss", // Hindi
    "سلام boss", // Persian
    "مرحبا boss", // Arabic
    "שלום boss", // Hebrew,
  
    // East Asian Languages
    "你好 boss", // Mandarin Chinese
    "こんにちは boss", // Japanese
    "안녕하세요 boss", // Korean
    "Xin chào boss", // Vietnamese,
  
    // Southeast Asian Languages
    "Kamusta boss", // Tagalog
    "Selamat pagi boss", // Indonesian (good morning)
    "Selamat siang boss", // Indonesian (good afternoon)
    "Selamat malam boss", // Indonesian (good evening)
    "สวัสดี boss", // Thai,
  
    // Other Languages
    "Olá boss", // Portuguese
    "Hej boss", // Swedish
    "Hallo boss", // Dutch
    "Terve boss", // Finnish
    "Sawubona boss" // Zulu
  ];

  const operation = [
    "+",
    "-",
    "*",
    "/",
    ".",
    undefined
  ];

var isOn = false;
var canPlacePeriod = true


const helloButton = document.querySelector(".hello-button").addEventListener("click", function() {
    currDisplay.value = greetings[Math.round((Math.random() * 23))]
    isOn = false    
    setTimeout(() => {
        currDisplay.value = ""
        isOn = true
    }, 1500)
    
});


const equalButton = document.querySelector(".equal-button").addEventListener("click", function() {
    console.log(currDisplay.value[currDisplay.value.length -1])
    currDisplay.value = eval(currDisplay.value)
});


const acButton = document.querySelector(".ac-button").addEventListener("click" , function() {
    currDisplay.value = ''
    isOn = true
    canPlacePeriod = true
    console.log(isOn)
});


const byeButton = document.querySelector(".bye-button").addEventListener("click", function() {
    if (isOn === true) {
        currDisplay.value = "Goodbye"
        isOn = false
        setTimeout(() => {
            currDisplay.value = ""
        }, 1500)
        
    }
});
const eraseButton = document.querySelector(".erase-button").addEventListener("click", function() {
    currDisplay.value = currDisplay.value.slice(0,-1)
});






const periodButton = document.querySelector(".period-button").addEventListener("click", function() {
    if (isOn) {
        if (canPlacePeriod) {
        currDisplay.value += "."
        canPlacePeriod = false
        }}
});
const plusButton = document.querySelector(".plus-button").addEventListener("click", function() {
    if (isOn) {
        if (!operation.includes(currDisplay.value[currDisplay.value.length -1])) {
            currDisplay.value += "+"
            canPlacePeriod = true
        }}
});
const minusButton = document.querySelector(".minus-button").addEventListener("click", function() {
    if (isOn) {
        // if (!operation.includes(currDisplay.value[currDisplay.value.length -1])) {
        //     currDisplay.value += "-"
        //     canPlacePeriod = true
        // }

        if (currDisplay.value[currDisplay.value.length -1] != "-") {
            currDisplay.value += "-"
            canPlacePeriod = true
        }}
    
});
const multiplyButton = document.querySelector(".multiply-button").addEventListener("click", function () {
    if (isOn) {
        if (!operation.includes(currDisplay.value[currDisplay.value.length -1])) {
            currDisplay.value += "*"
            canPlacePeriod = true
        }}
});
const divideButton = document.querySelector(".divide-button").addEventListener("click", function() {
    if (isOn) {
        if (!operation.includes(currDisplay.value[currDisplay.value.length -1])) {
            currDisplay.value += "/"
            canPlacePeriod = true
        }}
});


const nineButton = document.querySelector(".nine-button").addEventListener("click" , function() {
    if (isOn) {currDisplay.value += 9}
});
const eightButton = document.querySelector(".eight-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 8}
});
const sevenButton = document.querySelector(".seven-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 7}
});
const sixButton = document.querySelector(".six-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 6}
});
const fiveButton = document.querySelector(".five-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 5}
});
const fourButton = document.querySelector(".four-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 4}
});
const threeButton = document.querySelector(".three-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 3}
});
const twoButton = document.querySelector(".two-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 2}
});
const oneButton = document.querySelector(".one-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 1}
});
const zeroButton = document.querySelector(".zero-button").addEventListener("click", function() {
    if (isOn) {currDisplay.value += 0}
});









