var objArray = new Array();
function average() {
    var objResult = document.getElementById("result");
    var objAvg = document.getElementById("avg");
    objResult.innerText = objArray.join(",");
    objItem.value="";
}
function doPush(){
    var objAvg = document.getElementById("avg");
    objArray.push(objAvg.value);
    nickname();
    average();
}
function nickname(){
    var getP = document.getElementById("selNick");
    var nickvalue = getP.options[getP.selectedIndex].value;
    var avgvalue = getP.options[getP.selectedIndex].value;
    var setNick = 0, setAvg = 0;
    if (nickvalue == '143' || avgvalue == '143') {
        setNick = '꿈꾸는나무', setAvg = '143';
    } else if(nickvalue == '145') {
        setNick = '리에';
    } else if(nickvalue == '185') {
        setNick = '판기';
    } else if(nickvalue == '161') {
        setNick = '투마로';
    } else if(nickvalue == '169') {
        setNick = '레몬';
    } else if(nickvalue == '126') {
        setNick = '수박';
    } else if(nickvalue == '173') {
        setNick = '토마토';
    } else if(nickvalue == '118') {
        setNick = '오렌지';
    } else if(nickvalue == '119') {
        setNick = '메론';
    } else if(nickvalue == '120') {
        setNick = '바나나';
    } else if(nickvalue == '131') {
        setNick = '파인애플';
    } else if(nickvalue == '162') {
        setNick = '딸기';
    } else if(nickvalue == '133') {
        setNick = '감';
    } else if(nickvalue == '143') {
        setNick = '한라봉';
    } else if(nickvalue == '158') {
        setNick = '망고';
    } else if(nickvalue == '175' && avgvalue == '175') {
        setNick = '미수', setAvg = '175';
    } else{
    return false;
    }
    document.getElementById("nickvalue").value = setNick;
    document.getElementById("avgvalue").value = setAvg;
}            
$(function() { 
    var seatCnt = $("li").length; 
$("#setBtn").click(function() { 
    var seatNumArray = [], 
    rNum; 
    for( var i = 0; i < seatCnt; i++ ) { 
        while(true) { 
        rNum = Math.floor(Math.random() * seatCnt) + 1; 
        var ex = false; 
        seatNumArray.forEach(function(num) { 
            if( num == rNum ) ex = !ex; 
        }) 
            if( !ex ) break; 
        } 
        seatNumArray.push(rNum); 
        $("li").eq(i).text(rNum); 
    } 
}) 
 })  