//push
var A = [5, 7, 8, 2, 11, 16, 77, 88, 66];

function pushElement(){
    A.push("99");
    document.getElementById("push").innerHTML = A;
}

//return index of 11
function returnIndex(){
    var ind = A.indexOf(11);
    document.getElementById("index").innerHTML = ind;
}

//delete number: 17 
function deleteElement(){
    var deleteValue = 77;
    let index = A.indexOf(deleteValue);
    if(index != -1){
        A.splice(index,1);
    }
    document.getElementById("delete").innerHTML = A;
}

//sort ascending
function sortAsc(){
    A.sort(function(a,b){return a-b});
    document.getElementById("sortAsc").innerHTML = A;
}

//sort descending
function sortDsc(){
    A.sort(function(a,b){
        return b-a;
    });
    document.getElementById("sortDsc").innerHTML = A;
}

// tách A thành B chứa chẵn và C chứa lẻ
function filterBC(){
    var B= A.filter(function(item){
        return item%2===0;
    });
    var C= A.filter(function(item){
        return item%2!==0;
    });
    document.getElementById("filter").innerHTML = `Mảng chẵn trước lẻ sau: ${B} ${C}`;
    document.getElementById("filterB").innerHTML=`Mảng B chứa số chẵn: ${B}`;
    document.getElementById("filterC").innerHTML=`Mảng C chứa số lẻ: ${C}`;
}






