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


    }
   
     
]





$(document).ready(function(){




    $("#questions_sec").css({"background-color":"yellow","height":"90vh","width":"50%","margin":"auto"});


    $("#start").click(function(){

        $("#start").hide();

        ques();

    })


    var ques = function(){

             var titile = $("<h1>");
    
            titile.text("Totally Trivial Trivia");
        
            $("#questions_sec").add(titile).css({"color":"red","text-align":"center"}).appendTo("#questions_sec");

            var timeRemain = $("<p>");

            timeRemain.text("Time Remaining");

            timeRemain.add("<span>").attr("id","timeSecon").appendTo(timeRemain);

            $("#questions_sec").add(timeRemain).appendTo("#questions_sec");

            for(var i=0;i<questions.length;i++){
                //console.log(questions[i].qusetion);
                //console.log(questions[i].ans1);

            var newQuesDiv= $("<div>");

            var que = $("<p>");
     
            que.text(questions[i].qusetion);
            
     
            var ansDiv = $("<div>");
     
            
             var radioBtn1 = $('<input type="radio" name="rbtnCount" value=""/>');
             radioBtn1.text(questions[i].ans1);
             radioBtn1.attr("index",i);
             radioBtn1.append("<h5>"+questions[i].ans1+"</h5>");
             ansDiv.append(radioBtn1);
             

             var radioBtn2 = $('<input type="radio" name="rbtnCount" />');
             radioBtn2.text(questions[i].ans2);
             ansDiv.append(radioBtn2);
             radioBtn2.attr("index",i);

             var radioBtn3 = $('<input type="radio" name="rbtnCount" />');
             radioBtn3.text(questions[i].ans3);
             ansDiv.append(radioBtn3);
             radioBtn3.attr("index",i);
     
            newQuesDiv.append(que);
            que.append(ansDiv);
     
            $("#questions_sec").append(newQuesDiv);

            
            
            }


            

               /* alert("clicked");

                var ansVal = $("input[type='radio']:checked").text();

                //console.log($("input[type='radio']:checked"));

                console.log(ansVal);

        
                console.log("in change");
        
            })*/

            var checkRes = function(){
                var index = $(this).attr("index");
                console.log(questions[index].qusetion);
                var ansVal = $("input[type='radio']:checked").text();
                console.log(ansVal);
                if(ansVal==questions[index].ans){
                    console.log("true");
                }

               
            }

            $("input[type='radio']").click(".index", checkRes);

            


            

           
            var number = 3;

            var intervalID;

            intervalId = setInterval(decrement, 1000);

            function decrement() {

               
                number--;
        
                $("#timeSecon").text(number);
          
          
                
                if (number === 0) {
                  //  Alert the user that time is up.

                  $("#questions_sec").hide();

                  $("#res").css({"background-color":"yellow","height":"30vh","width":"20%","margin-top":"10%","margin-left":"40%"});

                  
                }
              }
          
       
    }

    

    

});