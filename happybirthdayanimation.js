let mySong = new Audio("happy-birthday-254480.mp3");

$(document).ready(function() {
    $(".candles").click(function() {
        
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -185, "opacity": 1}, "fast");
      mySong.play();
      mySong.addEventListener("ended", window.location("https://kzm2002.github.io/index.html"));
    });
    
});