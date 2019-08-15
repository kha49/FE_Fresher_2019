var A = [5,7,8,2,11,77,88,66];

A.push(99);
console.log(`Mảng sau khi thêm số 99 là: ${A}`);


A.forEach((value, index) => {
    if (value === 11) {
        console.log(`Vị trí của số 11 là: ${index}`);
    }
});


A.splice(77,1);
console.log(`Mảng sau khi xóa số 77 là: ${A}`);


A.sort((value, index) => {
    return value - index;
});
console.log(`Mảng sau khi sắp xếp tăng dần là: ${A}`)
A.sort((value, index) => {
    return index - value;
});
console.log(`Mảng sau khi sắp xếp giảm dần là: ${A}`)


var B = A.filter(A => A%2 === 0);
var C = A.filter(A => A%2 !== 0);
var D = B.concat(C);
console.log(`Mảng chẵn trước lẻ sau là: ${D}`);