// Booleans for whether or not they are playing
let heavyrainPlaying = false
let softrainPlaying = false
let thunderPlaying = false
let oceanwavesPlaying = false
let birdsPlaying = false
let cricketsPlaying = false
let crowPlaying = false
let crowsPlaying = false

// Import audio files
let heavyrain = new Audio('resources/sounds/heavyrain.mp3')
let softrain = new Audio('resources/sounds/softrain.mp3')
let oceanwaves = new Audio('resources/sounds/oceanwaves.mp3')
let thunder = new Audio('resources/sounds/thunder.mp3')
let birds = new Audio('resources/sounds/birds.mp3')
let crickets = new Audio('resources/sounds/crickets.mp3')
let crow = new Audio('resources/sounds/singlecrow.mp3')
let crows = new Audio('resources/sounds/manycrows.mp3')

// Set volumes to zero
heavyrain.volume = 0
softrain.volume = 0
oceanwaves.volume = 0
thunder.volume = 0
birds.volume = 0
crickets.volume = 0
crow.volume = 0
crows.volume = 0

// Play function
function Play(audio){
    audio.play()
    $(audio).animate({volume: 1}, 500)
}

// Pause function
function Pause(audio){
    $(audio).animate({volume:0}, 500)
    setTimeout(() => {
        audio.pause()
    }, 500)
}

// Heavy rain click event
$('#heavyrainButton').click(function (e) { 
    e.preventDefault()
    // Test to play or pause
    if (heavyrainPlaying == false){
        Play(heavyrain)
        heavyrainPlaying = true
    } else {
        Pause(heavyrain)
        heavyrainPlaying = false
    }
});

// Soft rain click event
$('#softrainButton').click(function (e) { 
    e.preventDefault()
    if (softrainPlaying == false){
        Play(softrain)
        softrainPlaying = true
    } else {
        Pause(softrain)
        softrainPlaying = false
    }
});

// Ocean waves click event
$('#oceanwavesButton').click(function (e) { 
    e.preventDefault()
    if (oceanwavesPlaying == false){
        Play(oceanwaves)
        oceanwavesPlaying = true
    } else {
        Pause(oceanwaves)
        oceanwavesPlaying = false
    }
});

// Thunder click event
$('#thunderButton').click(function (e) { 
    e.preventDefault()
    if (thunderPlaying == false){
        Play(thunder)
        thunderPlaying = true
    } else {
        Pause(thunder)
        thunderPlaying = false
    }
});

// Birds click event
$('#birdsButton').click(function (e) { 
    e.preventDefault()
    if (birdsPlaying == false){
        Play(birds)
        birdsPlaying = true
    } else {
        Pause(birds)
        birdsPlaying = false
    }
});

// Crickets click event
$('#cricketsButton').click(function (e) { 
    e.preventDefault()
    if (cricketsPlaying == false){
        Play(crickets)
        cricketsPlaying = true
    } else {
        Pause(crickets)
        cricketsPlaying = false
    }
});

// Crow click event
$('#crowButton').click(function (e) { 
    e.preventDefault()
    if (crowPlaying == false){
        Play(crow)
        crowPlaying = true
    } else {
        Pause(crow)
        crowPlaying = false
    }
});

// Crows click event
$('#crowsButton').click(function (e) { 
    e.preventDefault()
    if (crowsPlaying == false){
        Play(crows)
        crowsPlaying = true
    } else {
        Pause(crows)
        crowsPlaying = false
    }
});