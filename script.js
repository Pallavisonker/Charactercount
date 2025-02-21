let inputtext = document.getElementById('inputtext');
let count = document.getElementById('count');

inputtext.addEventListener('input', () => {
    count.textContent = inputtext.value.length;
})

