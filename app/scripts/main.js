console.log('scripts/main.js');

window.addEventListener('load', function() {
    const ta = document.querySelector('#ta')
    const taNumber = document.querySelector('#taNumber')
    ta.addEventListener("input", function(){
        taNumber.innerText = ta.value.length;
    });
});


let input = document.querySelector("#interestsTa");
input.addEventListener("keypress", function (evt) {

    let words = this.value.split(/\s+/);
    let numWords = words.length;
    let maxWords = 5;
    if (numWords > maxWords) {
        evt.preventDefault();
    }
});
