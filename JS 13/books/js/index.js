$("#date-now").text(new Date().getFullYear())

$('.menu li a').click( function(){
    $(this).closest('.menu').find('.active').removeClass('active');
    $(this).addClass('active');
})

$('input:text').on('keydown input paste',
    function (){
        console.log($(this).val())
    })

$('.accordion-header').on('click', function (){
    let activeHeader
        = $(this).hasClass('active')?$(this):$(this)
        .parent().find('.accordion-header.active')
    if(!$(this).hasClass('active')){
        activeHeader.next().slideUp(200).removeClass('active');
        activeHeader.removeClass('active')
        $(this).addClass('active').next().slideToggle(400).addClass('active')
    }
})


let sectionMore = $('#see-more')
let topCoord = $(window).height() - sectionMore.outerHeight()

$(window).on('resize', function (){
    topCoord = $(window).height() - sectionMore.outerHeight()
    if (!sectionMore.hasClass('closed')){
        sectionMore.css('top', topCoord)
    }
})

$('.close-green, #not-now').click(function (){
    let section = $(this).parents('section')
    let target = $('.close-green')
    if(section.hasClass('closed')){
        section.animate({
            top: topCoord
        }, 400)
        target.html('&times;')
    }
    else {
        section.animate({
            top: '97vh'
        }, 400)
        target.html('&#9650;')
    }
    section.toggleClass('closed')
})


// $('data-popup').on('click', popupShow)
$('body').on('click', '[data-popup]', popupShow)

function popupShow(evt){
    evt.preventDefault()
    let id = $($(this).data('popup'))
    id.fadeIn(600)
}

$('.popup-close').click(function (){
    $(this).closest('.popup-wrapper').fadeOut(400);
})

let textAnim = [
    "Read our books",
    "Subscribe to news",
    "Learn about new books",
    "Add books to our library"
]
let textId = null;
let textIndex = 0;

