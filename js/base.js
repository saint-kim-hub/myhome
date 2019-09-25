var objArray = new Array();
function printArray() {
    var objResult = document.getElementById("result");
    var objItem = document.getElementById("item");
    objResult.innerText = objArray.join(",");
    objItem.value="";
}
function doPush(){
     var objItem = document.getElementById("item");
     objArray.push(objItem.value);
     printArray();
}
function gen() {
    n1 = Math.floor(Math.random()*1);
    f.random.value = n1;
}
function laneData(){ 
    var nickname = new Array(); 
        // nickname[0]="꿈꾸는나무"; 
        // nickname[1]="사과"; 
        // nickname[2]="배"; 
        // nickname[3]="포도"; 
        
        nickname="200";
        nickname="나무";

var lane = Math.floor(Math.random()*(nickname.length)); 

document.write(nickname[lane]); 
alert(laneData()); 
} 