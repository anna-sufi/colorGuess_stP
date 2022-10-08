const colorsArray = ['#FE2712', '#FC600A', '#FB9902', '#FCCC1A', '#FEFE33', '#B2D732', '#66B032', '#347C98', '#0247FE', '#4424D6', '#8601AF', '#C21460'];
const blocks = document.querySelectorAll('.block');
const guessColor = Math.floor(Math.random()*colorsArray.length);

for (let i= 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor= colorsArray[i];
    blocks[i].addEventListener('click', function handleClick() {
        if (i==guessColor) {
            Swal.fire({
                title: 'Victory!',
                text: 'You won',
                imageUrl: '1297648.svg',
                background: `${colorsArray[i]}`,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
            blocks.forEach(block=> {
                block.remove();
            })
            document.querySelector('h1').textContent='Victory!!!'
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Not this...',
                text: 'try again!'
            });
            blocks[i].style.backgroundColor = 'transparent';
            blocks[i].removeEventListener('click', handleClick);
        }
    });
}