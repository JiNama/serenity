// Bool for whether or not popup is open
let enabled = false


// When "tip!" button is clicked, bring up tip menu
$('#tipButton').click(function (e) { 
    e.preventDefault()
    if (enabled == false){
        $('.popupMenu').css('visibility', 'visible')
        $('.grid-container').css('pointer-events', 'none')
        $('.popupMenu').animate({opacity: 1}, 400)
        $('.all').css({'filter':'brightness(20%)', 'transition':'all 0.3s ease-in'})
        setTimeout(() => {
            enabled = true
        }, 1)
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
        setTimeout(() => {
            $('.popupMenu').css('visibility', 'hidden')
        }, 400)
    }
})
