const colorInput = document.getElementById('color-input');
const colorCode = document.querySelector('.color-code');
const colorPreview = document.querySelector('.color-preview');


colorInput.addEventListener('input',()=>{
    const color = colorInput.value;
    colorPreview.style.backgroundColor = color;
    colorCode.textContent = color;
})