// // Event Handdling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });


// DOM Traversal
const close = document.querySelectorAll('.close');

for( let i = 0; i < close.length; i++ ) {
    close[i].addEventListener('click', function() {
        close[i].parentElement.style.display = 'none';
    });
}




