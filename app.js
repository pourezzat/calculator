const input = document.getElementById('input');
const result = document.querySelector('.result');
function addToInput(value) {
    if ((input.innerText.length === 0) && isNaN(value)) return;
    if (isNaN(input.innerText.charAt(input.innerText.length - 1)) && isNaN(value)) return;
    input.innerHTML += value;
    if (!isNaN(value)) result.innerHTML = eval(input.innerHTML)
}
function equal() {
    input.innerHTML = eval(input.innerHTML)
}
function emptyALL() {
    empty()
    emptyResult();
}
function empty() {
    input.innerHTML = '';
}
function emptyResult() {
    result.innerHTML = '';
}
function negative() {
    if (input.innerHTML == '') return
    input.innerHTML = eval(input.innerHTML) * -1;
    if (!isNaN(input.innerText.charAt(input.innerText.length - 1))) result.innerHTML = eval(input.innerHTML)
}
function backspace() {
    input.innerHTML = input.innerHTML.slice(0, -1)
    let evalresult = input.innerHTML;
    if (isNaN(input.innerText.charAt(input.innerText.length - 1))) {
        evalresult = input.innerHTML.slice(0, -1)
        result.innerHTML = eval(evalresult)
    }else if (input.innerText.length === 0) emptyResult()
    else result.innerHTML = eval(evalresult)
}