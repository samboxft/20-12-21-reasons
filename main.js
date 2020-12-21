/// <reference path="jquery-3.5.1.js" />



// var explanations = ["It would be nice if you have girlfriend that can get along with your best friends or hang out together with your squad. This is reasons why you should date me because I am such an easy going person and won't feel awkward join your group friends.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",]


function generateReason(reasons){
    document.getElementById('doubt').value = '';
    var reasons = ["I Am Easy Going","Can Cheer You Up"," I Have The Sweetest Smile","Funny Person","Independent","I Am Smart","Don't Underestimate My Sense of Humor", "I Am Full of Surprise"," I Will Pay My Own Food","I Can Be A Chatter-Box Sometimes","I Am A Good Cook","I Can Play Instruments","We Can Cuddle All Day","I Can Drive","I Am A Good Kisser"," I Speak 3 Languages","I Can't Lie","We Can Party All Night","I Can Crave Your Lazy Side Too"," I Am Good Gamer","I Won't Hurt You","I Love Any Kind Of Music","Your Weekend Is Going To Be Fun","I'm Organized","You Can Count On Me"," I Am Your 24/7 Partner","I Manage My Money Wisely","I Consider Animals As My Best Friend","My Family Is Open-Minded Too","Very Loyal Person"];
    var numberOfReasons = reasons.length;
    var randomize = Math.floor(Math.random()* numberOfReasons);
    var randomReason = reasons[randomize];
    document.reasonForm.reason.value = randomReason;
}