var pageContentEl = document.querySelector("#page-content");
var quizHeading = document.getElementById("quiz-heading");
var buttonsDiv = document.getElementById("buttons-div");
var responseFooterDiv = document.getElementById("respons-footer");
var currentQuestion = 1;
var questions = 12;
var currentAnswer = "";



document.addEventListener("DOMContentLoaded", function(){
    //....
    question1();
});


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



//Load Question1 HTML Elements
var question1 = function() {

  responseFooterDiv.innerHTML = "";
  quizHeading.innerHTML = "What is the best Monk spec?"
  
  var windWalkerButton = document.createElement("button");
  windWalkerButton.textContent = "Windwalker";
  windWalkerButton.className = "btn windwalker-btn";
  windWalkerButton.setAttribute("data-button-id", 'windwalker');
  buttonsDiv.appendChild(windWalkerButton);

   var brewMasterButton = document.createElement("button");
  brewMasterButton.textContent = "BrewMaster";
  brewMasterButton.className = "btn brewmaster-btn";
  brewMasterButton.setAttribute("data-button-id", 'brewmaster');
  buttonsDiv.appendChild(brewMasterButton);
  
 
};

//Load Question2 HTML Elements
var question2 = function() {
     responseFooterDiv.innerHTML = "";
    quizHeading.innerHTML = "What is the best mage spec?"
    removeAllChildNodes(buttonsDiv);

  

    var frostButton = document.createElement("button");
    frostButton.textContent = "frost";
    frostButton.className = "btn frost-btn";
    frostButton.setAttribute("data-button-id", 'frost');
    buttonsDiv.appendChild(frostButton);

    var fireButton = document.createElement("button");
    fireButton.textContent = "fire";
    fireButton.className = "btn fire-btn";
    fireButton.setAttribute("data-button-id", 'fire');
    buttonsDiv.appendChild(fireButton);

      var arcaneButton = document.createElement("button");
    arcaneButton.textContent = "arcane";
    arcaneButton.className = "btn arcane-btn";
    arcaneButton.setAttribute("data-button-id", 'arcane');
    buttonsDiv.appendChild(arcaneButton);
}


// End of Quiz HTML Elements 
var EndOfQuiz = function(){
    quizHeading.innerHTML = "Thanks for taking my quiz, please enter your information"


}

//Load the Next Questions HTML Elements
 function loadNextQuestion(){
     switch(currentQuestion){
         case currentQuestion = 1:{
             question2();
             break;
         }
         case currentQuestion =  2:{
            question3();
            break;
         }
         case currentQuestion = 3:{
             question4();
             break;
         }
     }   
 }



 // Handle the Question buttons
 var quizButtonHandler = function (event) {
     
    // get target element from event
  var button = event.target;

    switch(currentQuestion){
        case 1:{
            quiz1Button(button);
            break;
        }
        case 2:{
            quiz2Button(button);
            break;
        }
        case 3:{
            quiz3Button(button);
            break;
        }
        case 10:{
            EndOfQuiz();
            break;
        }
    }


  

 }


 //Question 1 button handler
var quiz1Button = function(button){
    if(button.matches(".windwalker-btn")){
         responseFooterDiv.innerHTML = "Correct";
    }
    else{
        responseFooterDiv.innerHTML = "False";
    }
    currentQuestion = 2;

    setTimeout(loadNextQuestion, 3000);
}


//question 2 button handler
var quiz2Button = function(button){
    if(button.matches(".frost-btn")){
         responseFooterDiv.innerHTML = "Correct";
    }
    else{
         responseFooterDiv.innerHTML = "False";
    }

    currentQuestion = 3;

    setInterval(loadNextQuestion, 3000);
}

//question 3 button handler
var quiz3Button = function(button){
        if(button.matches(".frost-btn")){
         responseFooterDiv.innerHTML = "Correct";
    }
    else{
         responseFooterDiv.innerHTML = "False";
    }

    
    currentQuestion = 4;

    setInterval(loadNextQuestion, 3000);
}

 pageContentEl.addEventListener("click", quizButtonHandler);




