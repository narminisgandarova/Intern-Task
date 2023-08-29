// Get the .box element
const boxElement = document.querySelector('.box');

// Raise the .box element to a higher stacking order
boxElement.style.position = 'absolute';
boxElement.style.top = '0';
boxElement.style.right = '0';
boxElement.style.zIndex = '2000';
