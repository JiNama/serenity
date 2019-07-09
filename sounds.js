// Booleans for whether or not they are playing
let heavyrainPlaying = false
let softrainPlaying = false
let thunderPlaying = false
let oceanwavesPlaying = false

// Import audio files
let heavyrain = new Audio('resources/sounds/heavyrain.mp3')
let softrain = new Audio('resources/sounds/softrain.mp3')
let oceanwaves = new Audio('resources/sounds/oceanwaves.mp3')
let thunder = new Audio('resources/sounds/thunder.mp3')

// Set volumes to zero
heavyrain.volume = 0
softrain.volume = 0
oceanwaves.volume = 0
thunder.volume = 0

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