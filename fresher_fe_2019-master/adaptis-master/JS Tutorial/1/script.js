$(document).ready(function () {
    let array = [5, 7, 8, 2, 11, 16, 77, 88, 66]
    let oddArray = []
    let evenArray = []
    // let key = Math.floor((Math.random() * 10) + 1)
    // for (let i = 0; i < key; i++) {
    //     array.push(Math.floor((Math.random() * 100) + 1))
    // }
    $(".reload-array__button").click(function() {
        $(".result").append(`<h3 class="array">[${array}]</h3>`)
    })

    $(".add__button").click(function() {
        array.push(99)
        let final = array
        $("h3.array").replaceWith(`<h3 class="array">[${final}]</h3>`)
    })

    //Cach 1 - Search
    $(".search__button").click(function() {
        let temp = 0;
        for(let i = 0; i < array.length; i++)
            if(array[i]===11) {
                $(".result").append(`<p>Số ${array[i]} nằm ở vị trí thứ ${i + 1}</p>`)
                temp++
            }
        if(temp===0)
            $(".result").append(`<p>Số ${array[i]} không tồn tại trong mảng</p>`)
    })

    //Cach 2 - Search
    // let checkNumber = (number) => {
    //     return number === 11;
    // }
    // let search = () => {
    //     console.log(array.find(checkNumber))
    //     console.log(array.indexOf(11) + 1)
    // }

    $(".delete__button").click(function() {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 77) {
                array.splice(i, 1)
                i--
            }
        }
        $("h3.array").replaceWith(`<h3 class="array">[${array}}</h3>`)
    })

    $(".sort__button--ascending").click(function() {
        array.sort((a, b) => { return a - b })
        $(".result").append(`<h3>[${array}]</h3>`)
    })

    $(".sort__button--descending").click(function() {
        array.sort((a, b) => { return b - a })
        $(".result").append(`<h3>[${array}]</h3>`)
    })


    $(".sort-by-odd-even__button").click(function() {
        let oddArray = []
        let evenArray = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                let temp = array.slice(i, i + 1)
                evenArray.push(temp)
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                let temp = array.slice(i, i + 1)
                oddArray.push(temp)
            }
        }
        array = evenArray.concat(oddArray)
        $(".result").append(`<h3>[${array}]</h3>`)
    })

    $(".separate").click(function() {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                let temp = array.slice(i, i + 1)
                evenArray.push(temp)
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                let temp = array.slice(i, i + 1)
                oddArray.push(temp)
            }
        }
        $(".result").append(`<h3>[${evenArray}]</h3>`)
        $(".result").append(`<h3>[${oddArray}]</h3>`)
    })
})