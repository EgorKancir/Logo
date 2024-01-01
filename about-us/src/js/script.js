const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (crrentClass, totalClass) {
            return '<span class="' + crrentClass + '"></span>' + 
            'of' + 
            '<span class="' + totalClass + '"></span>';
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});