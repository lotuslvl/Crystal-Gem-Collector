var randomnum= 0;
var usernum=0;
var pearlnum=0;
var garnetnum=0;
var amythestnum=0;
var peridotnum=0;
var lapisnum=0;
var wins=0;
var losses=0;


$(document).ready(function() {

function gameReset() {
    
    randomnum= 0;
    usernum=0;
    pearlnum=0;
    garnetnum=0;
    amythestnum=0;
    peridotnum=0;
    lapisnum=0;
    $("#playernumber").text(0); 
    
        
    
 };    

function setrandomNum() {

    randomnum= (Math.floor(Math.random() * 120))+19;
    $("#goalnumber").text(randomnum); 
    pearlnum= (Math.floor(Math.random() * 12))+1;
    garnetnum= (Math.floor(Math.random() * 12))+1;
    amythestnum= (Math.floor(Math.random() * 12))+1;
    peridotnum= (Math.floor(Math.random() * 12))+1;
    lapsisnum= (Math.floor(Math.random() * 12))+1;

};



function checkWin() {
    $("#my_audio").get(0).play();
                
    if(usernum===randomnum) {
        alert("You Win!");
        wins=wins+1;
        $("#wins").text(wins); 
        gameReset();
        setrandomNum();
    
    }
    
    else if(usernum>randomnum) {
        alert("You Lost");
        losses=losses+1;
        $("#losses").text(losses); 
        gameReset();
        setrandomNum();
    
    }

}



setrandomNum();



$("#pearl").click(function () {

    usernum=usernum+pearlnum;
    $("#playernumber").text(usernum); 

    checkWin();

    })

$("#garnet").click(function () {

    usernum=usernum+garnetnum;
    $("#playernumber").text(usernum); 
    
    checkWin();
    });

$("#amythest").click(function () {

    usernum=usernum+amythestnum;
    $("#playernumber").text(usernum); 
    checkWin();
        
    });


$("#peridot").click(function () {

    usernum=usernum+peridotnum;
    $("#playernumber").text(usernum); 
            
    checkWin();
            
    });


$("#lapis").click(function () {

    usernum=usernum+peridotnum;
    $("#playernumber").text(usernum); 

    checkWin();
            
    });
    
       








});



