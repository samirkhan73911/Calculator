const display= document.getElementById("display")

function appendtodisplay(intput){

    display.value +=intput
}

function calculate(){
    try{

        display.value=eval(display.value.replace("%","/100*"))
    }
    catch{
        display.value="ERROR"
    }
}

function cleardisplay(){
    display.value=" "
}

function removeNO(){
    display.value = display.value.toString().slice(0, -1);
}