console.log('scripts/main.js');

window.addEventListener('load', function() {
    const ta = document.querySelector('#ta')
    const taNumber = document.querySelector('#taNumber')
    ta.addEventListener("input", function(){
        taNumber.innerText = ta.value.length;
    });
});
