console.log('scripts/main.js');

window.addEventListener('load', function() {
    const ta = document.querySelector('#ta, #taAddPhotoPhoto')
    const taNumber = document.querySelector('#taNumber,#taNumberAddPhotoPhoto')
    ta.addEventListener("input", function(){
        taNumber.innerText = ta.value.length;
    });
    const taAddPhotoEpisode = document.querySelector('#taAddPhotoEpisode')
    const taNumberAddPhotoEpisode = document.querySelector('#taNumberAddPhotoEpisode')
    taAddPhotoEpisode.addEventListener("input", function(){
        taNumberAddPhotoEpisode.innerText = taAddPhotoEpisode.value.length;
    });
});


let interestsTaPhoto = document.querySelector("#interestsTa,#interestsTaPhoto,#interestsTaPhotoEpisode");
interestsTaPhoto.addEventListener("keypress", function (evt) {

    let words = this.value.split(/\s+/);
    let numWords = words.length;
    let maxWords = 5;
    if (numWords > maxWords) {
        evt.preventDefault();
    }
});
let interestsTaPhotoEpisode = document.querySelector("#interestsTaPhoto");
interestsTaPhotoEpisode.addEventListener("keypress", function (evt) {

    let words = this.value.split(/\s+/);
    let numWords = words.length;
    let maxWords = 5;
    if (numWords > maxWords) {
        evt.preventDefault();
    }
});
let input = document.querySelector("#interestsTaPhotoEpisode");
input.addEventListener("keypress", function (evt) {

    let words = this.value.split(/\s+/);
    let numWords = words.length;
    let maxWords = 5;
    if (numWords > maxWords) {
        evt.preventDefault();
    }
});
document.getElementById('inputActivator').onclick = function() {
    document.getElementById('helperActive').classList.toggle('menu__first-block__search-box__short-active');
    document.getElementById('inputActive').classList.toggle('menu__first-block__search-box-active');
    function menuClose() {
        document.getElementById('helperActive').classList.remove('menu__first-block__search-box__short-active');
        document.getElementById('inputActive').classList.remove('menu__first-block__search-box-active');
    }
    function menuCloseClickOutside(e) {
        if(!e.target.matches('.menu__first-block__search-box,.menu__first-block__search-box *')) {
            menuClose();
        }
    }
    document.addEventListener('click', menuCloseClickOutside);
    document.addEventListener('touchstart', menuCloseClickOutside);
}

