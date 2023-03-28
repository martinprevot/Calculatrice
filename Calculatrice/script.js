function plusN(x1, x2) {
    return (Number(x1) + Number(x2));
}

function minusN(x1, x2) {
    return (Number(x1) - Number(x2));
}

function dividedByN(x1, x2
    ) {
    if(x2 == 0){
        return alert("La partition ne peut pas être 0");
    }
    else{
        return (Number(x1) / Number(x2));
    }
}

function percentN(x1) {
    return (Number(x1) / 100);
}

function multpilyN(x1, x2) {
    return (Number(x1) * Number(x2));
}

function findNumbers(str) {
    var newStr = str.match(/\d+/g);
    return newStr;
}

function delExecess(str, sign) {
    let s = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == sign){
            s++;
        }
    }
    return s;
}

var res = document.getElementById("reset");
var per = document.getElementById("percent");
var del = document.getElementById("delete");
var div = document.getElementById("dividedBy");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multpily = document.getElementById("multiply");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var minus = document.getElementById("minus");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var plus = document.getElementById("plus");
var zero = document.getElementById("zero");
var d_zero = document.getElementById("double-zero");
var dat = document.getElementById("dat");
var eq = document.getElementById("equal");
var label = document.getElementById("screen-label");

res.addEventListener("click", function(){
    label.innerText = "";
});

del.addEventListener("click", function(){
    let str = label.textContent;
    let lastCharacter = str[str.length - 1];
    let newStr = str.replace(lastCharacter, "");
    label.textContent = newStr;
});

one.addEventListener("click", function(){
    label.innerText += "1";
});

two.addEventListener("click", function(){
    label.innerText += "2";
});

three.addEventListener("click", function(){
    label.innerText += "3";
});

four.addEventListener("click", function(){
    label.innerText += "4";
});

five.addEventListener("click", function(){
    label.innerText += "5";
});

six.addEventListener("click", function(){
    label.innerText += "6";
});

seven.addEventListener("click", function(){
    label.innerText += "7";
});

eight.addEventListener("click", function(){
    label.innerText += "8";
});

nine.addEventListener("click", function(){
    label.innerText += "9";
});

zero.addEventListener("click", function(){
    label.innerText += "0";
});

d_zero.addEventListener("click", function(){
    label.innerText += "00";
});

plus.addEventListener("click", function(){
    label.innerText += "+";
    let s = delExecess(label.textContent, "+");
    if(s > 1) {
        for(var i = 1; i < s; i++){
            let str = label.textContent;
            let lastCharacter = str[str.length - 1];
            let newStr = str.replace(lastCharacter, "");
            label.textContent = newStr;
        }
    }
});

minus.addEventListener("click", function(){
    label.innerText += "-";
    let s = delExecess(label.textContent, "-");
    if(s > 1) {
        for(var i = 1; i < s; i++){
            let str = label.textContent;
            let lastCharacter = str[str.length - 1];
            let newStr = str.replace(lastCharacter, "");
            label.textContent = newStr;
        }
    }
});

multpily.addEventListener("click", function(){
    label.innerText += "x";
    let s = delExecess(label.textContent, "x");
    if(s > 1) {
        for(var i = 1; i < s; i++){
            let str = label.textContent;
            let lastCharacter = str[str.length - 1];
            let newStr = str.replace(lastCharacter, "");
            label.textContent = newStr;
        }
    }
});

div.addEventListener("click", function(){
    label.innerText += "/";
    let s = delExecess(label.textContent, "/");
    if(s > 1) {
        for(var i = 1; i < s; i++){
            let str = label.textContent;
            let lastCharacter = str[str.length - 1];
            let newStr = str.replace(lastCharacter, "");
            label.textContent = newStr;
        }
    }
});

dat.addEventListener("click", function(){
    label.innerText += ".";
    let s = delExecess(label.textContent, ".");
    if(s > 1) {
        for(var i = 1; i < s; i++){
            let str = label.textContent;
            let lastCharacter = str[str.length - 1];
            let newStr = str.replace(lastCharacter, "");
            label.textContent = newStr;
        }
    }
});

eq.addEventListener("click", function(){
    let numbers = findNumbers(label.textContent);

    if(label.textContent.indexOf("+") > 0){
        label.innerText = plusN(numbers[0], numbers[1]);
    }
    else if(label.textContent.indexOf("-") > 0){
        label.innerText = minusN(numbers[0], numbers[1]);
    }
    else if(label.textContent.indexOf("x") > 0){
        label.innerText = multpilyN(numbers[0], numbers[1]);
    }
    else if(label.textContent.indexOf("/") > 0){
        label.innerText = dividedByN(numbers[0], numbers[1]);

        if(findNumbers(label.textContent) == null){
            label.innerText = "";
        }
    }
    
});

per.addEventListener("click", function(){
    label.innerText = percentN(label.textContent);
});












