let btna = document.querySelector('input#btna')
btna.addEventListener('click', add)

let num = document.querySelector('input#fnum')
let flist = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, values)) {

    } else {
        alert('Invalid value or already found in the list.')
    }
}