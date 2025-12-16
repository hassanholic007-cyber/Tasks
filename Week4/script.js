function changeTheme() {
const body = document.body;
body.classList.toggle('dark-theme');


const header = document.querySelector('header');
const nav = document.querySelector('nav');


if(body.classList.contains('dark-theme')) {
header.style.backgroundColor = '#333';
header.style.color = '#fff';
nav.style.backgroundColor = '#555';
alert('Dark theme activated!');
} else {
header.style.backgroundColor = '#007c91';
header.style.color = '#fff';
nav.style.backgroundColor = '#004d56';
alert('Light theme activated!');
}
}

function changeBackgroundColor() {
const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff'];
document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function updateContent() {
const content = document.querySelector('.dynamic-content');
const messages = ['Hello World!', 'Welcome to my site!', 'JavaScript is fun!', 'Have a great day!'];
content.textContent = messages[Math.floor(Math.random() * messages.length)];
}