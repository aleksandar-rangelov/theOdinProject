const container = document.querySelector('.container');

function generatePlane(number) {
    for(let i = 0; i < number; i++) {
        const row = document.createElement('div');     
        row.setAttribute('class', 'row');
        for(let j = 0; j < number; j++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            
            row.append(pixel);
        }
        container.append(row);
    }
} 

function handleHover() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        const classes = pixel.classList;
        pixel.addEventListener('mouseover', () => {
            // if(classes.contains('colored'))
            //     classes.remove('colored')
            // else
            classes.add('colored');
        })
    })
}

generatePlane(16);
handleHover();
