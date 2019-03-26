"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Patrick M. Capuano
   Date:   3.25.19
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

//Loads the init function when the window first loads itself.
window.onload = init;

//init function is declared and then is given the following commands
function init() {

      //Declaring the calcButtons variable and then setting it equal to the tags that share the class of "calcButton".
      var calcButtons = document.getElementsByClassName("calcButton");

      for (var i = 0; i < calcButtons.length; i++) {
            calcButtons.addEventListener("click", buttonClick);
      };

      //Runs the calcKey function with the key-down event happening within every element with the ID of "calcWindow".
      document.getElementById("calcWindow").addEventListener("key-down", calcKeys);
}

//Function that controls how the calculator looks when the buttons are pressed.
function buttonClick() {

      //Variables set as commands, with calcValue being the value of "calcWindow", calcDecimal equal to the value to decimals, and buttonValue equal the object value's target.
      var calcValue = calcWindow.value,
            calcDecimal = decimals.value,
            buttonValue = value.target;
}

//A switch case structure for the possible values of the buttonValue variable.
switch (buttonValue) {
      // In the case of the delete key being pressed, it will set calcValue to an empty string.
      case "del":
            calcValue = " ";
            break;

      // Backspace it will run the eraseChar function with calcValue as a parameter.
      case "bksp":
            eraseChar(calcValue);
            break;

      // Enter will will calculate the following expressing by changing calcValue to the string provided.
      case "enter":
            calcValue = " = " + evalEq(calcValue, calcDecimal) + "\n";
            break;

      // Previous returns the lastvalue by running the lastEq function with calcValue as the parameter.
      case "prev":
            calcValue = lastEq(calcValue);
            break;

      // Otherwise, if no cases match, calcValue will be set to whatever value the buttonValue is added onto itself.
      default:
            calcValue = calcValue += buttonValue;      
}

      // The calcWindow text area box is set to the value of calcValue.
      calcWindow = calcValue;

      // Command ran in order to get the cursor focus within the calculator window.
      document.getElementById("calcWindow").focus();

      function calcKeys() {

            // Like before, the calcValue and calcDecimal local variables are declared within the function.
            var calcValue,
            calcDecimal;

            // Another switch function, this time for the key's values.
            switch (key.value) {

                  // In the case of a delete key, it will function similarly to the "del" button.
                  case "Delete":
                  calcValue = " ";
                  break;

                  // If the Enter key is pressed, it will function an indentical purpose to the "enter" button. 
                  case "Enter":
                  calcValue = " = " + evalEq(calcValue, calcDecimal);
                  break;

                  // If the up arrow is pressed, then it will function the same as the "prev" button. 
                  case "ArrowUp":
                  cakcValue = lastEq(calcWindow.value)
                  break;
                  
                  default:
                  break;
            }

            // Sets the value attribute of calcWindow to calcValue.
            calcWindow.value = calcValue;


      }



/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}