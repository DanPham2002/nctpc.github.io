const modal = document.querySelector('.js-modal-login');
const openModals = document.querySelectorAll('.js-login');
const closeModal = document.querySelector('.js-close');
const loginContainer = document.querySelector('.js-container');
const modalRegister = document.querySelector('.js-modal-register');
const registerContainer = document.querySelector('.js-register-container');
const openRegister = document.querySelector('.js-register');
const closeRegister = document.querySelector('.js-close-register');
const modalShared = document.querySelector('.js-modal-shared');
const openShared = document.querySelector('.js-shared');
const closeShared = document.querySelector('.js-close-shared');
//Đóng mở login
function showModal(){
    modal.classList.add('open');
}
function hideModal(){
    modal.classList.remove('open');
}
//Đóng mở register
function showRegister(){
    modalRegister.classList.add('open');
}
function hideRegister(){
    modalRegister.classList.remove('open');
}
//Đóng mở shared
function showShared(){
    modalShared.classList.add('open');
}
function hideShared(){
    modalShared.classList.remove('open');
}
for (openModal of openModals){
    openModal.addEventListener('click', showModal);
}
closeModal.addEventListener('click', hideModal);
modalRegister.addEventListener('click', hideRegister);
registerContainer.addEventListener('click', function(event){
    event.stopPropagation();
})
openRegister.addEventListener('click', showRegister);
closeRegister.addEventListener('click', hideRegister);
openShared.addEventListener('click', showShared);
closeShared.addEventListener('click', hideShared);






//Đóng mở cài đặt trang web
var openSetting = document.getElementById('showSetting');
var modalSetting = document.getElementById('js-modalSetting');
var openLanguage = document.getElementById('option-language');
var openThemes = document.getElementById('option-themes');
var languageDisplay = document.getElementById('js-language');
var themesDisplay = document.getElementById('js-themes');
var swSetting = modalSetting.className;
var swLanguage = languageDisplay.className;
var swThemes = themesDisplay.className;


openSetting.onclick = function(){
    isClose = modalSetting.className === swSetting;
    if(isClose){
        modalSetting.className ='modal-container' + ' ' + 'open'; 
    }
    else{
        modalSetting.className = 'modal-container';
    }
}


openLanguage.onclick = function(){
    isClose = languageDisplay.className === swLanguage;
    if(isClose){
        languageDisplay.className = 'selection-language' + ' ' + 'open';
    }
    else{
        languageDisplay.className = 'selection-language';
    }
}


openThemes.onclick = function(){
    isClose = themesDisplay.className === swThemes;
    if(isClose){
        themesDisplay.className = 'selection-themes' + ' ' + 'open';
    }
    else{
        themesDisplay.className = 'selection-themes';
    }
}

//js right
var playMusic = document.getElementById("js-play");
var stopMusic = document.getElementById("js-stop");
var getStatus = playMusic.style.display;
var changeStatus = stopMusic.style.display;
playMusic.onclick = function(){
    isOpen = playMusic.style.display === getStatus;
    isClose = stopMusic.style.display === changeStatus;
    if(isOpen || isClose){
        playMusic.style.display = "none";
        stopMusic.style.display = "block";
    }
    else{
        playMusic.style.display = "block";
    }
}

