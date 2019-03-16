$(document).ready(function () {

    var winner = document.getElementsByClassName('winner');
    var loser = document.getElementsByClassName('loser');
    var compNum = document.getElementsByClassName('bigger1');
    var totalScore = document.getElementsByClassName('totalscore');
    var total = 0;

    function setRandomNumber() { 
        return (Math.floor((Math.random() * 101) + 19));
    }

    function setRandomSmallNumber() { 
        return (Math.floor((Math.random() * 12) + 1))
    }

    var pinkcrystal = setRandomSmallNumber();
    var diamond = setRandomSmallNumber();
    var purplecrystal = setRandomSmallNumber();
    var redcrystal = setRandomSmallNumber();

    function reset() {
        compNum = setRandomNumber()
        $(".bigger1").text(compNum)
        total = 0
        pinkcrystal = setRandomSmallNumber();
        diamond = setRandomSmallNumber();
        purplecrystal = setRandomSmallNumber();
        redcrystal = setRandomSmallNumber();
        $('.pinkCrystal').val(pinkcrystal);
        $('.diamond').val(diamond);
        $('.purpleCrystal').val(purplecrystal);
        $('.redCrystal').val(redcrystal);
    }


    reset()

    $('.pinkCrystal').on('click', function () { //Here we call the function so that when we click we get a random number
        console.log('I am the pink crystal!')
        var pinkGemValue = parseInt($(this).val());
        console.log("pinkgemvalue", pinkGemValue)
        total = total + pinkGemValue;
        console.log(total);
        $(".totalscore").text(total)
    

    })

    $('.diamond').on('click', function () {
        console.log('I am a diamond!')
        var diamondGemValue = parseInt($(this).val());
        console.log("diamondValue", diamondGemValue)
        total = total + diamondGemValue;
        console.log(total);
        $(".totalscore").text(total)
    })

    $('.purpleCrystal').on('click', function () { //Showing NaN
        console.log('I am the purple crystal!')
        var purpleGemValue = parseInt($(this).val());
        console.log("purpleGemvalue", purpleGemValue)
        total = total + purpleGemValue;
        console.log(total);
        $(".totalscore").text(total)
    })

    $('.redCrystal').on('click', function () { //Showing NaN
        console.log('I am the red crystal!')
        var redGemValue = parseInt($(this).val());
        console.log("redGemvalue", redGemValue)
        total = total + redGemValue;
        console.log(total);
        $(".totalscore").text(total)
    })
});

if (total === compNum) {
    winner++;
    alert('You won!')
    console.log('you won!')
    reset()
    $(".winner").text(winner)
}
if (total > compNum) {
    loser++;
    alert('You lost!')
    reset()
}



//First, I need to make sure that when we setRandomNumber it only resets when we win or lose the game 
//I need to make sure that whenever we start a new game, the random number when we click on the crystal, stays the same
//We need to be able to push the numbers of the crystals into an empty array
//Then we need to combine the numbers and match them to the number in bigger1
//If the numbers match, user wins and we increase our win total! If they do not, then we increase our losses by 1.