function numberClick(num) {
    
    if (lcdMain.innerHTML.length < 10) {
        
        if (lcdMain.innerText == "0") {
            lcdMain.innerText = num;
        
        } else {
            lcdMain.innerText = lcdMain.innerText + num;
        }
    }
}

function operClick(operator) {
    
    if (oper == '') {
        val1 = lcdMain.innerText;
        topLine.innerText = val1 + ' ' + operator;
        lcdMain.innerText = 0;
        oper = operator;
    
    } else {
        val2 = lcdMain.innerText;
        topLine.innerText = topLine.innerText + ' ' + val2;
        answer = eval(topLine.innerText);
        lcdMain.innerText = +(Math.round(answer + "e+9")  + "e-9");
        val1 = lcdMain.innerText;
        oper = "";
    }
}

function clearAll() {
   
    val1 = 0;
    val2 = 0;
    memVal = 0;
    memFull = false;
    memIcon.style.visibility = "hidden";
    oper = "";
    lcdMain.innerText = 0;
    topLine.innerText = "0";
}

function clearLCD() {
    
    lcdMain.innerText = 0;
}

function memButton(){
    
    if (memFull == false){
        memVal = lcdMain.innerHTML;
        memIcon.style.visibility = "visible";
        memFull = true;
    
    } else {
        lcdMain.innerHTML = memVal;
        
    }
} 