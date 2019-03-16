$(document).ready(function () {

    var win = document.getElementById('winner');
    var loss = document.getElementById('loser');
    var compNum = document.getElementsByClassName('bigger1');
    var totalScore = document.getElementsByClassName('totalscore');

    var total = 0;
    var winValue = 0;
    var lossValue = 0;

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
        $('.totalscore').textContent = 0; 
        total = 0;
        pinkcrystal = setRandomSmallNumber();
        diamond = setRandomSmallNumber();
        purplecrystal = setRandomSmallNumber();
        redcrystal = setRandomSmallNumber();
        $('.pinkCrystal').val(pinkcrystal);
        $('.diamond').val(diamond);
        $('.purpleCrystal').val(purplecrystal);
        $('.redCrystal').val(redcrystal);
    }
    function clear(){
        $(".totalscore").empty()
    }
 reset()
    $('.pinkCrystal').on('click', function () { 
        console.log('I am the pink crystal!')
        var pinkGemValue = parseInt($(this).val());
        console.log("pinkgemvalue", pinkGemValue)
        total = total + pinkGemValue;
        console.log(total);
        $(".totalscore").text(total)
        handleWinOrLose();
    

    })

    $('.diamond').on('click', function () {
        console.log('I am a diamond!')
        var diamondGemValue = parseInt($(this).val());
        console.log("diamondValue", diamondGemValue)
        total = total + diamondGemValue;
        console.log(total);
        $(".totalscore").text(total)
        handleWinOrLose();
    })

    $('.purpleCrystal').on('click', function () { 
        console.log('I am the purple crystal!')
        var purpleGemValue = parseInt($(this).val());
        console.log("purpleGemvalue", purpleGemValue)
        total = total + purpleGemValue;
        console.log(total);
        $(".totalscore").text(total)
        handleWinOrLose();
    })

    $('.redCrystal').on('click', function () { 
        console.log('I am the red crystal!')
        var redGemValue = parseInt($(this).val());
        console.log("redGemvalue", redGemValue)
        total = total + redGemValue;
        console.log(total);
        $(".totalscore").text(total)
        handleWinOrLose();
    })
    
    function handleWinOrLose() {   //Conditions to determine if we win or lose the game
        if (parseInt(total) === compNum) {
            winValue++;
            $('#winner').text(winValue);
            // winner.textContent ++;
            console.log(win)
            alert('You won!')
            reset()
            clear()
        
            
        }
        if (parseInt(total) > compNum) {
            lossValue ++;
            $('#loser').text(lossValue);
            // loss.textContent ++;
            console.log(loss)
            alert('Sorry try again!')
            reset()
            clear()
        }
    }
});
