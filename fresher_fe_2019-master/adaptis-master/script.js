var A = [5, 7, 8, 2, 11, 16, 77, 88, 66];
var numberArray = document.getElementsByClassName('arrayDemo');
var demo = document.getElementsByClassName('demo');

numberArray[0].innerHTML = A;
numberArray[1].innerHTML = A;
numberArray[2].innerHTML = A;
numberArray[3].innerHTML = A;
numberArray[4].innerHTML = A;
numberArray[5].innerHTML = A;

// Thêm số 99
function add() {
    A.push(99);

    demo[0].innerHTML = A;
}

// Tìm vị trí số 11
function find11() {
    A.indexOf(11);

    demo[1].innerHTML = A.indexOf(11);
}

// Xóa số 77
function delete77() {
    var c = A.indexOf(77);
    A.splice(c, 1);

    demo[2].innerHTML = A;
}

// Xếp theo thứ tự tăng dần
function increase() {
    A.sort(function (a, b) {return a - b});

    demo[3].innerHTML = A;
}

// Xếp theo thứ tự giảm dần
function decrease() {
    A.sort(function (a, b) {return b - a});

    demo[3].innerHTML = A;
}

// Phân chia chẵn lẻ
function even(evenNumber) {
    if (evenNumber%2 === 0) {
        return evenNumber;
    }
}

function odd(oddNumber) {
    if (oddNumber%2 !== 0) {
        return oddNumber;
    }
}

function oddEven() {
    
    var evenNo = A.filter(even);
    var oddNo = A.filter(odd);
        
    demo[4].innerHTML = evenNo.concat(oddNo);
}

// Tách thành mảng lẻ và chẵn (2 mảng B và C)
function oddArr() {
    var B = A.filter(odd);

    demo[5].innerHTML = B;
}

function evenArr() {
    var C = A.filter(even);

    demo[5].innerHTML = C;
}