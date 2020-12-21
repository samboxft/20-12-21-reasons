/// <reference path="jquery-3.5.1.js" />





function generateReason(reasons){
    var explanations = ["It would be nice if you have boyfriend that can get along with your best friends or hang out together with your squad. This is reasons why you should date me because I am such an easy going person and won't feel awkward join your group friends.","If you date me, I will always try to cheer you up within your bad days.","Reasons why you should date me? One of them is because I love to smile. It is sure my positive vibes going to affect you too. Be prepare to fall in love if you see the sweetest smile that I have.","Have a funny person as your lover won't bored you. Trust me and this is reasons why you should date me." ,"I am a really independent Also even when I am sick, I can go to hospital by myself ","can be a good Teacher","I will basically laugh at any joke even a bad one"];
    document.getElementById('doubt').value = '';
    document.querySelector("#explanation").value = '';
    var reasons = ["I Am Easy Going","Can Cheer You Up"," I Have The Sweetest Smile","Funny Person","Independent","I Am Smart","Don't Underestimate My Sense of Humor", "I Am Full of Surprise"," I Will Pay My Own Food","I Can Be A Chatter-Box Sometimes","I Am A Good Cook","I Can Play Instruments","We Can Cuddle All Day","I Can Drive","I Am A Good Kisser"," I Speak 3 Languages","I Can't Lie","We Can Party All Night","I Can Crave Your Lazy Side Too"," I Am Good Gamer","I Won't Hurt You","I Love Any Kind Of Music","Your Weekend Is Going To Be Fun","I'm Organized","You Can Count On Me"," I Am Your 24/7 Partner","I Manage My Money Wisely","I Consider Animals As My Best Friend","My Family Is Open-Minded Too","Very Loyal Person"];
    var numberOfReasons = reasons.length;
    var explainLength = explanations.length
    var randomize = Math.floor(Math.random()* numberOfReasons);
    var randomizExp = Math.floor(Math.random()* explainLength);
    var randomReason = reasons[randomize];
    var randomExp = explanations[randomizExp];
    document.reasonForm.reason.value = randomReason;
    var exp = document.querySelector("#explanation").innerHTML =  randomExp;

         setTimeout(() => {
            $("#explanation").empty();
         }, 3000);

     
}

