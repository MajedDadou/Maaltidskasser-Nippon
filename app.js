// ------for the menu----
function show() {
    document.getElementById('sidebar').classList.toggle('active');
}




document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.filter');

    filters.forEach(filter => {

        filter.addEventListener('click', function () {

            let selectedFilter = filter.getAttribute('data-filter');
            let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
            let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

            if (selectedFilter == 'all') {
                itemsToHide = [];
                itemsToShow = document.querySelectorAll('.projects [data-filter]');
            }

            itemsToHide.forEach(el => {
                el.classList.add('hide');
                el.classList.remove('show');
            });

            itemsToShow.forEach(el => {
                el.classList.remove('hide');
                el.classList.add('show');
            });

        });
    });
});


// pop up menu
document.addEventListener('DOMContentLoaded', function () {
    const openButtons = document.querySelectorAll('.open-popup');
    const popupContainer = document.querySelector('.popup-container');
    const closePopup = document.querySelector('.close-popup');

    openButtons.forEach(button => {
        button.addEventListener('click', function () {
            popupContainer.style.display = 'flex';
        });
    });

    closePopup.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });
});



// payment option
document.addEventListener('DOMContentLoaded', function () {
    const oneTimeRadio = document.getElementById('one-time');
    const monthlyRadio = document.getElementById('monthly');
    const priceElement = document.getElementById('price');
    const totalPriceElement = document.querySelector('.total-price');

    oneTimeRadio.addEventListener('change', function () {
        priceElement.textContent = '0 DKK'; // Set one-time payment price
        totalPriceElement.textContent = '200 DKK'; // Update total price
    });

    monthlyRadio.addEventListener('change', function () {

        priceElement.textContent = '20%'; // Set monthly payment price
        totalPriceElement.textContent = '160 DKK'; // Update total price
    });
});
