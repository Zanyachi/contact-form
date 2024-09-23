// varibles for the inputs

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#useremail');
const enquiry = document.querySelector('#enquiry');
const support = document.querySelector('#support');
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');
const submitBtn = document.querySelector('.submit');
const subAlert = document.querySelector('.submit-message');
const section = document.getElementsByTagName('section');

// event listeners
submitBtn.addEventListener('click', submit);

// functions

function submit(e){
    event.preventDefault
     subAlert.style.display = 'flex';
}