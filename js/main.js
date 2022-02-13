jQuery(document).ready(($) => {

    // FIXED HEADER
    window.onscroll = () => {
        if (window.pageYOffset > 140) {
            $('#header').addClass('active')
        } else {
            $('#header').removeClass('active')
        }
    }

    // ISOTOPE
    let btns = $('#servicos .button-group button')

    btns.click((e) => {
        $('#servicos .button-group button').removeClass('active')
        e.target.classList.add('active')

        let selector = $(e.target).attr('data-filter')
        $('#servicos .grid').isotope({
            filter: selector
        })
    })

    $(window).on('load', () => {
        $('#servicos .grid').isotope({
            filter: '*'
        })
    })

    // MAGNIFIC-POPUP
    $('.grid .popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            tPrev: 'Anterior',
            tNext: 'Próxima',
            tCounter: '%curr% de %total%'
        }
    })

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyload: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})