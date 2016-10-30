$(document).ready(function() {
  var clicks = 0;
  var memories = ["I love you", "Best mom ever", "Lets move in together!", "I miss you so so much..", "'..here is the deepest secret nobody knows, (here is the root of the root and the bud of the bud and the sky of the sky of a tree called life which grows higher than soul can hope or mind can hide), and this is the wonder that's keeping the stars apart. i carry your heart (i carry it in my heart)' -e e cummings", "Mom…Of the perfect child, I know I don’t fit the bill / But I deeply care about you / And I always will / Day in and day out no matter how things go / My love for you is constant / This, I hope you know", "There is no such thing as moving on from your mom", "'Love you to pieces' -Abdullah", "'You are my role model' -Nawaal", "'You're mom is such a babe' -Aimen's classmate", "I know you miss me / and this is crazy / but here's my number (503-750-0432) / So call me maybe", "She made broken look beautiful, and strong look invincible. She walked with the universe on her shoulder's, and made it look like a pair of wings", "The more I grow, the more I realize that my mom is the best friend I've ever had", "Home is where Ammi is", "Don't doubt yourself. You made the right decisions", "Be confident, you are a smart, capabale, smart, and kind person. Trust me... I know you :)", "Mom, you do so much for me. You're always working so hard. So I've been thinking, and I've decided that I'm not going to ask for any more favors", "There will be times you feel like you've failed. But in our eyes, heart, and mind, you are super mom.", "Always our mother. Forever our friend",
  "I'm only ever a phone call away", "Remember, I'm your favorite child.", "I wanna be like you when I grow up"];
  $("#generate").click(function() {
    clicks  += 1;
    // if(clicks > 3) {
    //   alert("Wow, slow down ... Save some for later?");
    // }
    $("#memory").empty();
    $("#memory").show();
    $("#image").empty();
    var memory = memories[Math.floor(Math.random() * memories.length)];
    var number = Math.floor(Math.random() * 49) + 1 ;
    $("#memory").append("<p>" + memory + "</p>");
    $("#image").append('<img class="img-responsive center-block" src="./img/img' + number + '.jpeg">');
  });
});
