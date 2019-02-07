var numWins = 0;
var numLosses = 0;
var totalScore = 0;

$(document).ready(function () {
    var randomNumGoal = Math.floor(Math.random() * 20) + 80;
    $("#randomNumber").html(randomNumGoal);
    var randomNum1 = Math.floor(Math.random() * 30);
    var randomNum2 = Math.floor(Math.random() * 30);
    var randomNum3 = Math.floor(Math.random() * 30);
    var randomNum4 = Math.floor(Math.random() * 30);

    function reset() {
        randomNumGoal = Math.floor(Math.random() * 20) + 80;
        $("#randomNumber").html(randomNumGoal);
        randomNum1 = Math.floor(Math.random() * 30);
        randomNum2 = Math.floor(Math.random() * 30);
        randomNum3 = Math.floor(Math.random() * 30);
        randomNum4 = Math.floor(Math.random() * 30);
        totalScore = 0;
        $("#currentScore").html(totalScore);
        console.log("we RESET");
    }



    console.log("I got here");
    $("#crystal1").on("click", function () {
        totalScore += randomNum1;
        $("#currentScore").html(totalScore);
        //isOver();
        if(totalScore > randomNumGoal){
            console.log("we OVER did it");
            numLosses++;
            $("#numLosses").html(numLosses);
            reset();

        }
        else if (totalScore === randomNumGoal) {
            numWins++;
            $("#numWins").html(numWins);
            reset();
            console.log("we GOT HERE yayyyyyyyyyyyyyy");
        }

        else {
            console.log("dennis is getting owned");

        }
    });

    $("#crystal2").on("click", function () {
        totalScore += randomNum2;
        $("#currentScore").html(totalScore);
        //isOver();
        if(totalScore > randomNumGoal){
            console.log("we OVER did it");
            numLosses++;
            $("#numLosses").html(numLosses);
            reset();

        }
        else if (totalScore === randomNumGoal) {
            numWins++;
            $("#numWins").html(numWins);
            reset();
            console.log("we GOT HERE yayyyyyyyyyyyyyy");
        }

        else {
            console.log("dennis is getting owned");

        }
    });

    $("#crystal3").on("click", function () {
        totalScore += randomNum3;
        $("#currentScore").html(totalScore);
        //isOver();
        if(totalScore > randomNumGoal){
            console.log("we OVER did it");
            numLosses++;
            $("#numLosses").html(numLosses);
            reset();

        }
        else if (totalScore === randomNumGoal) {
            numWins++;
            $("#numWins").html(numWins);
            reset();
            console.log("we GOT HERE yayyyyyyyyyyyyyy");
        }

        else {
            console.log("dennis is getting owned");

        }
    });

    $("#crystal4").on("click", function () {
        totalScore += randomNum4;
        $("#currentScore").html(totalScore);
        //isOver();
        //isOver();
        if(totalScore > randomNumGoal){
            console.log("we OVER did it");
            numLosses++;
            $("#numLosses").html(numLosses);
            reset();

        }
        else if (totalScore === randomNumGoal) {
            numWins++;
            $("#numWins").html(numWins);
            reset();
            console.log("we GOT HERE yayyyyyyyyyyyyyy");
        }

        else {
            console.log("dennis is getting owned");

        }
    });

});