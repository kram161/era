console.log('scripts/main.js');

try{
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

    window.addEventListener('load', function() {
        const taAddPhotoPhoto = document.querySelector('#taAddPhotoPhoto')
        const taNumberAddPhotoPhoto = document.querySelector('#taNumberAddPhotoPhoto')
        taAddPhotoPhoto.addEventListener("input", function(){
            taNumberAddPhotoPhoto.innerText = taAddPhotoPhoto.value.length;
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
}
catch {

}
try{
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
}
catch {

}
try{
    window.addEventListener('load', function (){
        const notificationActivator = document.getElementById('notification-activator');
        const notificationModal = document.getElementById('notification-activator-modal');
        const toggleMenu = () => {
            notificationModal.classList.toggle('menu__first-block__notification__modal-active');
        }
        notificationActivator.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener('click', e => {
            let target = e.target;
            let its_menu = target == notificationModal || notificationModal.contains(target);
            let its_hamburger = target == notificationActivator;
            let menu_is_active = notificationModal.classList.contains('menu__first-block__notification__modal-active');
            if (!its_menu && !its_hamburger && menu_is_active) {
                toggleMenu();
            }
        })
    })
}
catch {
}

window.addEventListener('load', function (){
    const burgerActivator = document.getElementById('burgerActivator');
    const burgerActive = document.querySelector('.menu__first-block__burger__block');
    const toggleMenu = () => {
        burgerActive.classList.toggle('menu__first-block__burger__block-active');
    }
    burgerActivator.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });
    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == burgerActive || burgerActivator.contains(target);
        let its_hamburger = target == burgerActivator;
        let menu_is_active = burgerActive.classList.contains('menu__first-block__burger__block-active');
        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
            document.querySelector('.menu__first-block__burger__button__cheeckbox').checked = false;
        }
    })
})
window.addEventListener('load', function (){
    const notificationActivatorMini = document.getElementById('notification-activator-mini');
    const notificationModalMini = document.getElementById('notification-modal-mini');
    const toggleMenu = () => {
        notificationModalMini.classList.toggle('menu__first-block__notification__modal-mini-active');
    }
    notificationActivatorMini.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });
    document.addEventListener('click', e => {
        let target = e.target;
        let its_notificationModal = target == notificationModalMini || notificationActivatorMini.contains(target);
        let its_notificationActivator = target == notificationActivatorMini;
        let notification_is_active = notificationModalMini.classList.contains('menu__first-block__notification__modal-mini-active');
        if (!its_notificationModal && !its_notificationActivator && notification_is_active) {
            toggleMenu();
        }
    })
})
window.addEventListener('load', function () {
    const userProfileActivator = document.querySelector('.menu__first-block__user-activator')
    const userProfileActivatorMini = document.querySelector('.menu__first-block__burger__block__user-profile-mini')
    const userProfileList = document.querySelector('.menu__first-block__user-profile__list')
    const toggleMenu = () => {
        userProfileList.classList.toggle('menu__first-block__user-profile__list-active');
    }
    userProfileActivator.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });
    userProfileActivatorMini.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });
    document.addEventListener('click', e => {
        let target = e.target;
        let itsProfileList = target === userProfileList || userProfileActivator.contains(target);
        let itsProfileActivator = target === userProfileActivator;
        let userProfileListActive = userProfileList.classList.contains('menu__first-block__user-profile__list-active');
        if (!itsProfileList && !itsProfileActivator && userProfileListActive) {
            toggleMenu();
        }
    })
})

window.addEventListener('load',function (){
    const collectionCrateButton = document.querySelector('.create-collection-button')
    let collectionCheck = document.querySelector('.collection')
    if (typeof(collectionCheck) != 'undefined' && collectionCheck != null)
    {
        collectionCrateButton.style.display = 'block';
    }
})
window.addEventListener('load',function (){
    const addPhotoButton = document.querySelector('.add-photo-button')
    const addPhotoModal = document.querySelector('.add-photo-modal')
    const addPhotoCloseButton = document.querySelector('.add-photo__close-button')
    addPhotoButton.addEventListener('click', () => {
        addPhotoModal.style.opacity = '1'
        addPhotoModal.style.visibility = 'visible'
    })
    addPhotoCloseButton.addEventListener('click', () => {
        addPhotoModal.style.opacity = '0'
        addPhotoModal.style.visibility = 'hidden'
    })
})
window.addEventListener('load',function (){
    const picturePage = document.querySelectorAll('.main__page__picture')
    const photoModal = document.querySelector('.photo-modal-window')
    const photoModalCloser = document.querySelector('.photo-modal__header__information__close-button')
    for(let i=0; i < picturePage.length;i++){
        picturePage[i].addEventListener('click', () => {
            photoModal.style.opacity = '1'
            photoModal.style.visibility = 'visible'
        })
    }
    photoModalCloser.addEventListener('click', () => {
        photoModal.style.opacity = '0'
        photoModal.style.visibility = 'hidden'
    })

})
window.addEventListener('load',function (){
    const createCollectionButton = document.querySelector('.create-collection-button')
    const createCollectionModal = document.querySelector('.create-collection-modal')
    const createCollectionCloseButton = document.querySelector('.create-collection__close-button')
    createCollectionButton.addEventListener('click', () => {
        createCollectionModal.style.opacity = '1'
        createCollectionModal.style.visibility = 'visible'
    })
    createCollectionCloseButton.addEventListener('click', () => {
        createCollectionModal.style.opacity = '0'
        createCollectionModal.style.visibility = 'hidden'
    })
})



const lIcon = document.getElementsByClassName('main__page__picture__hidden-info__like-icon');
const lIconA = document.getElementsByClassName('main__page__picture__hidden-info__like-icon-active');
const sIcon = document.getElementsByClassName('main__page__picture__hidden-info__save-icon');
const sIconA = document.getElementsByClassName('main__page__picture__hidden-info__save-icon-active');


for(let i =0 ; i < lIcon.length; i++){
    lIcon[i].addEventListener('click',()=>{
        lIcon[i].style.display = "none"
        lIcon[i].style.opacity = "0"
        lIconA[i].style.display = "block"
        lIconA[i].style.opacity = "1"
    });
}
for(let i = 0; i < lIconA.length; i++){
    lIconA[i].addEventListener('click',()=>{
        lIcon[i].style.display = "block"
        lIcon[i].style.opacity = "1"
        lIconA[i].style.display = "none"
        lIconA[i].style.opacity = "1"
    });
}
for(let i = 0; i < sIcon.length; i++){
    sIcon[i].addEventListener('click',()=>{
        sIcon[i].style.display = "none"
        sIcon[i].style.opacity = "0"
        sIconA[i].style.display = "block"
        sIconA[i].style.opacity = "1"
    })
}
for(let i = 0; i < sIconA.length; i++){
    sIconA[i].addEventListener('click',()=>{
        sIcon[i].style.display = "block"
        sIcon[i].style.opacity = "1"
        sIconA[i].style.display = "none"
        sIconA[i].style.opacity = "0"
    })
}



let dropArea = document.getElementById('drop-area');

dropArea.ondragover = function () { this.className = 'hover'; return false; };
dropArea.ondragend = function () { this.className = ''; return false; };
dropArea.ondrop = function (e) {
    this.className = '';
    e.preventDefault();
}

let dropAreaPhoto = document.getElementById('drop-area-photo');

dropAreaPhoto.ondragover = function () { this.className = 'hover'; return false; };
dropAreaPhoto.ondragend = function () { this.className = ''; return false; };
dropAreaPhoto.ondrop = function (e) {
    this.className = '';
    e.preventDefault();
}
const mLikeIcon = document.getElementsByClassName('photo-modal__title__information__icons__like-icon');
const mLikeIconA = document.getElementsByClassName('photo-modal__title__information__icons__like-icon-active');
const mSaveIcon = document.getElementsByClassName('photo-modal__title__information__icons__save-icon');
const mSaveIconA = document.getElementsByClassName('photo-modal__title__information__icons__save-icon-active');


for(let i =0 ; i < mLikeIcon.length; i++){
    mLikeIcon[i].addEventListener('click',()=>{
        mLikeIcon[i].style.display = "none"
        mLikeIcon[i].style.opacity = "0"
        mLikeIconA[i].style.display = "block"
        mLikeIconA[i].style.opacity = "1"
    });
}
for(let i = 0; i < mLikeIconA.length; i++){
    mLikeIconA[i].addEventListener('click',()=>{
        mLikeIcon[i].style.display = "block"
        mLikeIcon[i].style.opacity = "1"
        mLikeIconA[i].style.display = "none"
        mLikeIconA[i].style.opacity = "1"
    });
}
for(let i = 0; i < mSaveIcon.length; i++){
    mSaveIcon[i].addEventListener('click',()=>{
        mSaveIcon[i].style.display = "none"
        mSaveIcon[i].style.opacity = "0"
        mSaveIconA[i].style.display = "block"
        mSaveIconA[i].style.opacity = "1"
    })
}
for(let i = 0; i < mSaveIconA.length; i++){
    mSaveIconA[i].addEventListener('click',()=>{
        mSaveIcon[i].style.display = "block"
        mSaveIcon[i].style.opacity = "1"
        mSaveIconA[i].style.display = "none"
        mSaveIconA[i].style.opacity = "0"
    })
}
