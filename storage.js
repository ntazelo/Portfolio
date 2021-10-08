const formData = { name: '', email: '', message: '' };

const name=document.querySelector('.user-name');
const email=document.querySelector('.user-email');
const message=document.querySelector('.user-message');

let dataSaved=localStorage.getItem('data')
