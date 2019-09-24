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
