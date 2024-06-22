// Select all buttons with the class 'style-button'
const buttons = document.querySelectorAll('.style-button');

// Select the element with the class 'changablesfs'
const changablesfs = document.querySelector('.changablesfs');

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the data-image attribute value from the clicked button
        const imageUrl = this.getAttribute('data-image');
        // Change the background image of the changablesfs element
        changablesfs.style.backgroundImage = imageUrl;
    });
});
//asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

