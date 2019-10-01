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
    var push = document.join.na.value;
    if(push =="0000")
    document.location.href="/myhome/bowl/bmt.html"
    else {
    alert("닉네임과 에버리지를 확인하세요")
    }
}

function nickname(){
    var getP = document.getElementById("selNick");
    var nick = getP.options[getP.selectedIndex].value;
    var setNick = 0;
    if (nick == '143') {
        setNick = '꿈꾸는나무';
    } else if(nick == '200') {
        setNick = '리에';
    } else if(nick == '145') {
        setNick = '판기';
    } else if(nick == '185') {
        setNick = '투마로';
    } else if(nick == '161') {
        setNick = '포도';
    } else if(nick == '126') {
        setNick = '수박';
    } else if(nick == '173') {
        setNick = '토마토';
    } else if (nick == '118') {
        setNick = '오렌지';
    } else if(nick == '119') {
        setNick = '메론';
    } else if(nick == '120') {
        setNick = '바나나';
    } else if(nick == '131') {
        setNick = '파인애플';
    } else if (nick == '162') {
        setNick = '딸기';
    } else if(nick == '133') {
        setNick = '감';
    } else if(nick == '143') {
        setNick = '한라봉';
    } else if(nick == '158') {
        setNick = '망고';
    } else if(nick == '175') {
        setNick = '미수';
    } else{
    return false;
    }
    document.getElementById("nick").value = setNick;
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