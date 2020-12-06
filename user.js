// ==UserScript==
// @name         真島砲
// @namespace    https://nbatotu.github.io/t
// @version      0.1
// @description  好き嫌い.comのコメント投票を自動化
// @author       You
// @match        https://suki-kira.com/people/result/*
// @grant        none
// ==/UserScript==
var button = document.getElementsByClassName( "pull-xs-right h4 text-info" )
var button2 = document.getElementsByClassName( "pull-xs-left h4 text-danger" )
var divh = document.getElementsByClassName( "col-xs-1" )
for(let i=0;button.length>i;i++){
    button[i].insertAdjacentHTML('beforebegin','<div id="majibtn'+[i]+'"><p style="color:#5bc0de" id="majimabtn">◆</p></div>')
}
for(let i=0;button2.length>i;i++){
    button2[i].insertAdjacentHTML('afterend','<div id="majibtn2'+[i]+'"><p style="color:#d9534f" id="majimabtn" >◆</p></div>')
}

for(let i=0;divh.length>i;i++){
    divh[i].style="padding-left:13px;padding-right:13px;display: flex;";
}


function myfunc () {
    this.children[0].style="color:black"
    let voteid = this.nextElementSibling
    let num = voteid.id.split("-")[2]
    let numdiv = document.getElementById(num+"-dislike").children[0]
    let nm = Number(voteid.id.split("-")[4])
   function sige(){voteid.className = 'pull-xs-right h4 text-info';voteid.click();nm++;numdiv.innerText="voting..."+nm;};setInterval(sige,5)

}
function myfunc2 () {

    let voteid2 = this.previousElementSibling
    this.children[0].style="color:black"
    let num2 = voteid2.id.split("-")[2]
    let numdiv2 = document.getElementById(num2+"-like").children[0]
    let nm2 = Number(voteid2.id.split("-")[3])
    function sige(){voteid2.className = 'pull-xs-left h4 text-danger';voteid2.click();nm2++;numdiv2.innerText="voting..."+nm2;};setInterval(sige,5)
}

for(let i=0;button.length>i;i++){
    document.getElementById("majibtn"+[i]+"").addEventListener("click", myfunc)
}
for(let i=0;button2.length>i;i++){
    document.getElementById("majibtn2"+[i]+"").addEventListener("click", myfunc2)
}