const showButton = document.querySelector('#showDialog');
const dialogPopup = document.querySelector('#dialogPopup');
const closeButtons = document.querySelectorAll('.closeDialog');

const closeOnOutsideClick = document.getElementById('closeOnOutsideClick');
const closeOnEscape = document.getElementById('closeOnEscape');
const hasCloseButton = document.getElementById('hasCloseButton');
const hasBackdrop = document.getElementById('hasBackdrop');

const closeIcon = document.getElementById('closeIcon');

// Functions

showButton.addEventListener('click', () => {
    dialogPopup.showModal();
})

// Close btns
closeButtons.forEach((ev) => ev.addEventListener('click', () => {
    dialogPopup.close();
}))



// Close on Outside Click Listener:
checkCloseOnOutside();
function checkCloseOnOutside() {
  dialogPopup.addEventListener('click', closeOnOutsideClickListener);
}
function closeOnOutsideClickListener(event) {
  if (event.target.nodeName === 'DIALOG') {
    dialogPopup.close();
  }
}
closeOnOutsideClick.addEventListener('click', () => {
  if (closeOnOutsideClick.checked) {
    checkCloseOnOutside();
  } else {
    dialogPopup.removeEventListener('click', closeOnOutsideClickListener);
  }
});
