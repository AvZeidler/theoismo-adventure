const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const closeButton1 = document.querySelector('#popup1 .close-button');
const closeButton2 = document.querySelector('#popup2 .close-button');


function openPopup(popupId) {
    document.body.classList.add('no-scroll')
    document.getElementById(popupId).style.display = 'flex'
}


function closePopup(popupId) {
    document.body.classList.remove('no-scroll')
    document.getElementById(popupId).style.display = 'none'
}


closeButton1.onclick = function () {
    closePopup('popup1')
}

closeButton2.onclick = function () {
    closePopup('popup2')
}


window.onload = function () {
    setTimeout(() => {
        openPopup('popup1')
    }, 2000)

    setTimeout(() => {
        openPopup('popup2')
    }, 5000)
}

function closeWindow() {
    window.close();
}