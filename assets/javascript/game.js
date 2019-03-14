$(document).ready(function () {

var win
var loss
var numbers = [];




setRandomNumber()

function setRandomNumber() { //Whenever we refresh the page it changes the random number
    $('.bigger1').text(Math.floor((Math.random() * 50) + 1))
}

function setRandomSmallNumber() { //everytime we click on the crystal the number changes, need it to stay the same
    $('.totalscore').text(Math.floor((Math.random() * 10) + 1))

}


$('.pinkcrystal').on('click', function () { //Here we call the function so that when we click we get a random number
setRandomSmallNumber()
})

$('.diamond').on('click', function () {
    setRandomSmallNumber()
    console.log('I am a diamond!')
})
$('.purplecrystal').on('click', function () {
    setRandomSmallNumber()
    console.log('I am the purple crystal!')
})
$('.redcrystal').on('click', function () {
    setRandomSmallNumber()
    console.log('I am the red crystal!')
})
});

// function userTotalScore(params) {

// }

//First, I need to make sure that when we setRandomNumber it only resets when we win or lose the game 
//I need to make sure that whenever we start a new game, the random number when we click on the crystal, stays the same
//We need to be able to push the numbers of the crystals into an empty array
//Then we need to combine the numbers and match them to the number in bigger1
//If the numbers match, user wins and we increase our win total! If they do not, then we increase our losses by 1. 
