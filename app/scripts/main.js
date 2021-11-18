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

