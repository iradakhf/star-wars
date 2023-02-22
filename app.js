var count=0
var chselected =''
var chdefender= ''
var chselectedNumber = ''
var chdefenderNumber = ''
 var chselectedNumber2
 var chdefenderNumber2;
const randomNumberForFighters = function(){
    return Math.floor(Math.random() * 800+ (800-500));
 }
 for (const iterator of document.querySelectorAll(".chhealth")) {
  $(iterator).html(randomNumberForFighters())
 }

$(".character").on("click",function(){
        if(chselected==false){
        chselected = $(this);
        chselectedNumber = parseInt($(this).children(".chhealth").text());
        chselectedNumber2 = chselectedNumber;
        $("#selected-character").html(chselected);
        $(this).removeClass("select");
        $(".enemies").html($(".select"));
        $(".section-title").html("");
        }   
});
$(document).on("click",".enemies .character",function(){  
     if(chdefender==false){
        count++;
        chdefender= $(this);
        $("#defender").html(this);
        chdefenderNumber = parseInt($(this).children(".chhealth").text());
        chdefenderNumber2 = chdefenderNumber;
    }
});
$("#attack-button").on("click",function(){
    var randomNumber1 = randomNumberForFighters()
    var randomNumber2 = randomNumberForFighters()
    if(chselected &&  chdefender){
        chselectedNumber-=randomNumber1;
        chdefenderNumber-=randomNumber2;
        if(chselectedNumber>0 && chdefenderNumber>0 ){
                $("#selected-character .chhealth").html(chselectedNumber);
                $("#defender .chhealth").html(chdefenderNumber);
                $("#game-message").html("You attacked "+$("#defender .chname").html()+" for "+randomNumber2+" damage<br>"
                +$("#defender .chname").html()+" attacked you "+" for "+randomNumber1+" damage");
                
        }else if(chselectedNumber<0){
            $("#game-message").html("Game Over<br>");
            var newBtn = document.createElement("button");
            var restart = document.createTextNode("Restart");
            newBtn.append(restart);
            $("#game-message").append(newBtn)
            $("#selected-character .chhealth").html("0");
        }else 
        {
            if(count<3){
            $("#game-message").html("You won "+$("#defender .chname").html()+" ,choose your new enemy");
            $("#defender").empty();
            chdefender ='';
            chselectedNumber = chselectedNumber2;
            $("#selected-character .chhealth").html(chselectedNumber2);
        }else{
            $("#game-message").html("You won this game<br>");
            var newBtn = document.createElement("button");
            var restart = document.createTextNode("Restart");
            newBtn.append(restart);
            $("#game-message").append(newBtn);
            $("#defender .character .chhealth").html("0");            
            }          
        }       
    }
});
$(document).on("click","#game-message button",function(){
    window.location.reload();
});
