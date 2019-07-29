var correct=0;
var incorrect=0;
var questions = [
    {

       qusetion:"Whats is 2+2?",
       ans1:3,
       ans2:4,
       ans3:67,
       ans:4


    },

    {

        qusetion:"Whats is 6+2?",
       ans1:8,
       ans2:4,
       ans3:67,
       ans:8


    },

    {

        qusetion:"Whats is 13*2?",
       ans1:3,
       ans2:26,
       ans3:67,
       ans:26


    },

    {

        qusetion:"Whats is 70/2?",
       ans1:35,
       ans2:4,
       ans3:67,
       ans:35


    },

    {

        qusetion:"Whats is 12*12?",
       ans1:3,
       ans2:144,
       ans3:67,
       ans:144


    },
    {

        qusetion:"Whats is 90*9?",
       ans1:3,
       ans2:144,
       ans3:810,
       ans:810


    },
    {

        qusetion:"Whats is 1212/12?",
       ans1:11,
       ans2:144,
       ans3:810,
       ans:11


    },
    {

        qusetion:"Whats is 88*88?",
       ans1:3892,
       ans2:7744,
       ans3:8984,
       ans:7744


    },
    {

        qusetion:"Whats is 31*67?",
       ans1:2077,
       ans2:7744,
       ans3:8984,
       ans:2077


    }
   
     
]





$(document).ready(function(){


    $("#res").hide();

   
    $("#start").click(function(){

        $("#start").hide();
       

        ques();

    });


    var ques = function(){

        $("#questions_sec").css({"background-color":"yellow","height":"100vh","width":"50%","margin":"auto"});



             var titile = $("<h1>");
    
            titile.text("Totally Trivial Trivia");
        
            $("#questions_sec").add(titile).css({"color":"red","text-align":"center"}).appendTo("#questions_sec");

            var timeRemain = $("<p>");

            timeRemain.text("Time Remaining");

            timeRemain.add("<span>").attr("id","timeSecon").appendTo(timeRemain);
            

            $("#questions_sec").add(timeRemain).appendTo("#questions_sec");

            for(var i=0;i<questions.length;i++){
               

            var newQuesDiv= $("<div>");

            var que = $("<p>");
     
            que.text(questions[i].qusetion);
            que.attr("id",i.toString());
            
     
            var ansDiv = $("<div>");
            console.log(questions[i].ans1);

            var btn1 = $('<input>');
            btn1.attr("type","radio");
            btn1.attr("value",questions[i].ans1);
            btn1.attr("name","que"+i);
            var p1 = $('<span>');
            p1.text(questions[i].ans1);
            p1.append(btn1);
            ansDiv.append(p1);

            var btn2 = $('<input>');
            btn2.attr("type","radio");
            btn2.attr("name","que"+i);
            btn2.attr("value",questions[i].ans2);
            var p2 = $('<span>');
            p2.text(questions[i].ans2);
            p2.append(btn2);
            ansDiv.append(p2);

            var btn3 = $('<input>');
            btn3.attr("type","radio");
            btn3.attr("name","que"+i);
            btn3.attr("value",questions[i].ans3);
            var p3 = $('<span>');
            p3.text(questions[i].ans3);
            p3.append(btn3);
            ansDiv.append(p3);
            
           
     
            newQuesDiv.append(que);
            que.append(ansDiv);
     
            $("#questions_sec").append(newQuesDiv);

            }
        }

        
            
        
        

           
            var number = 10;
            

            var intervalID;

            intervalId = setInterval(decrement,6000);

            function decrement() {

               
                number--;
        
                $("#timeSecon").text(number);
          
          
                
                if (number === 0) {
                  //  Alert the user that time is up.
                  $("#res").show();

                  $("#questions_sec").hide();

                  $("#res").css({"background-color":"yellow","height":"30vh","width":"20%","margin-top":"10%","margin-left":"40%"});
                  $('#correctP').css({"margin-top":"20%","margin-left":"30%","padding-top":"20%"});
                  $('#incorrectP').css({"margin-left":"30%"});
                  for(var i=0;i<questions.length;i++){
                    var selValue = $('input[name=que'+i+']:checked').val(); 
                    if(questions[i].ans==selValue){
                        correct++;
                    }
                    else{
                        incorrect++;
                    }
                  }
                  $("#correct").text(correct);
                  $('#incorrect').text(incorrect);
                  console.log("Correct "+correct);
                  console.log("Incorrect "+incorrect);
                  
                }
              }
          
       
    

    

    

});