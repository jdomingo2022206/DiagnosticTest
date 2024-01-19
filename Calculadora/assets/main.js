let screenValue = "";

function clearScreen(){
  screenValue = "";
  updateScreen();
}

function addChar(char){
  screenValue += char;
  updateScreen();
}

function calc(){
    try {
        screenValue = eval(screenValue).toString();
        updateScreen();
    } catch (e) {
        screenValue = 'Error';
        updateScreen();
    }
}

function updateScreen(){
    document.getElementById('screen').value = screenValue;
}