(function gameFunction(){
    window.onload = function(){
        var gem1val = 0;
        var gem2val = 0;
        var gem3val = 0;
        var gem4val = 0;
        var target = 0;
        var score = 0;
        var wins = 0;
        var losses = 0;
        gem1val= Math.floor(Math.random() * 12) + 1;
        gem2val= Math.floor(Math.random() * 12) + 1;
        gem3val= Math.floor(Math.random() * 12) + 1;
        gem4val= Math.floor(Math.random() * 12) + 1;
        target = Math.floor(Math.random() * 102) + 19;
        document.getElementById("num").innerHTML = target;

        $(".gem").click(function(){
            switch ($(this).attr("id")) {
                case "gem1":
                score += gem1val;
                  break;
                case "gem2":
                score += gem2val;
                  break;
                case "gem3":
                score += gem3val;
                  break;
                case "gem4":
                score += gem2val;
                  break;
              }
              document.getElementById("scorenum").innerHTML = score;
              if (score > target) {
                  losses += 1;
                  document.getElementById("lose").innerHTML = "Losses: " + losses;
                  resetgame();
              } else if (score === target) {
                  wins += 1;
                  document.getElementById("win").innerHTML = "Wins: " + wins;
                  resetgame();
              }
          });



        function resetgame (){
            gem1val= Math.floor(Math.random() * 12) + 1;
            gem2val= Math.floor(Math.random() * 12) + 1;
            gem3val= Math.floor(Math.random() * 12) + 1;
            gem4val= Math.floor(Math.random() * 12) + 1;
            target = Math.floor(Math.random() * 102) + 19;
            score = 0;
            document.getElementById("num").innerHTML = target;
            document.getElementById("scorenum").innerHTML = score;
            }
    }
}());