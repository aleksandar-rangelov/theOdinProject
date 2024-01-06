const container = document.querySelector('.container');
const buttonNew = document.querySelector('#new');
const buttonClear = document.querySelector('#clear');

function generate(number) {
    // calculate the size of each pixel
    const size = 960 / number;

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (let i = 0; i < number; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');

        pixel.style.width = `${size}px`;
        pixel.style.height = `${size}px`;

        row.append(pixel);
    }

    for (let i = 0; i < number; i++) {
        const rowClone = row.cloneNode(true);
        container.append(rowClone);
    }

    handleHover();
}

function handleHover() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('colored');
        })
    })
}

function removeAllPixels() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => container.removeChild(row));
}

function clearSketch() {
    const colored = document.querySelectorAll('.colored');
    colored.forEach(pixel => pixel.classList.remove('colored'));
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

buttonNew.addEventListener('click', () => {
    removeAllPixels(container);
    const resolution = prompt("Enter the plane size:");
    generate(resolution);
});

buttonClear.addEventListener('click', () => clearSketch());
