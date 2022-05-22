document.getElementById('myButton').onclick = function(){
    var myName = document.getElementById('myName').value;
    var myBPM = document.getElementById("myBPM").value;
    var text = document.getElementById("myText");
    
    if (myName.length>0){
        document.getElementById('title').innerHTML = "Hello "+myName+"!";
        document.getElementById('identifier').classList.add("success");
    } else{
        document.getElementById('identifier').classList.remove("success");
    }
    if(myBPM>110||myBPM<60){
        text.classList.remove("success");
    } else{
        text.classList.add("success");
    }
}