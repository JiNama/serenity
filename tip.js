// Bool for whether or not popup is open
let enabled = false

let filterVal = 'brightness(30px)'

// Function that returns scroll to top
function noScroll(){
    window.scrollTo(0, 0)
}

// When "tip!" button is clicked, bring up tip menu
$('#tipButton').click(function (e) { 
    e.preventDefault()
    if (enabled == false){
        noScroll()
        $('.popupMenu').css('visibility', 'visible')
        $('.grid-container').css('pointer-events', 'none')

        $('.popupMenu').animate({opacity: 1}, 400)
        $('.all').css({'filter':'brightness(10%)', 'transition':'all 0.3s ease-out'})

        window.addEventListener('scroll', noScroll)
        setTimeout(() => {
            enabled = true
        }, 10)
    }else{
        $('.popupMenu').animate({opacity: 0}, 400)
        $('.grid-container').css('pointer-events', 'all')
        enabled = false
        $('.all').css('filter', 'none')
        window.removeEventListener('scroll', noScroll)
        setTimeout(() => {
            $('.popupMenu').css('visibility', 'hidden')
        }, 500)
    }
});

// If clicked outside of popup, close popup
$('.all').click(function (e) {
    e.preventDefault()
    if (enabled == true){
        $('.popupMenu').animate({opacity: 0}, 400)
        $('.grid-container').css('pointer-events', 'all')
        enabled = false
        $('.all').css('filter', 'none')
        window.removeEventListener('scroll', noScroll)
        setTimeout(() => {
            $('.popupMenu').css('visibility', 'hidden')
        }, 500)
    }
})
