learnt adding event listener to multiple elements of a class.<br>
learnt why let is used declare i in a for loop (to ensure that it has a local scope , if left undeclared it would have global scope which will lead to unexpected behaviour).<br>
learnt we have to use innertext or textcontent in place of value property when accessing an element other than form elements.<br>
learnt (got forgotten for a bit) that for an input element you have to use value property not innertext property.<br>
learnt that (got forgotten) to clear the value of an input field you have to set its value as an empty string ( "" ).<br>
learnt a bit more about includes() method.<br>
learnt string split() method to convert a string into an array of strings.<br>
learnt how to make basic calculator logic , although used ai for it , but will try and learn from it.<br>
JavaScript will try to convert strings to numbers in all numeric operations except + , because + operator is also for concatenation :

This will work:

let x = "100";
let y = "10";
let z = x / y;
<br>
finally implemented try and catch block for error handeling.<br>
added filter() method so that you can identify cases such as : 2+- , when before using filter(item => item !== "") , it is expressed as : ['2', '+', '', '-', ''] , and after using filter it is expressed as : ['2', '+', '-'] , so it becomes easy to handle invalid operator error.<br>
learnt isNaN() is used to check if the o/p is NaN.<br>
made a rough history section succesfullt.<br>
using trim() and slice() function to select the last character of the string in order to make the backspace function of calculator.<br>
<strong>(very imp) <strong>Variables defined inside DOMContentLoaded are not accessible to functions defined outside it.<br>
Therefore moved all the DOM element selections (and neccessary global variables) to the top of script under the DOMContentLoaded so that i dont have to write (define) it again and again, also moved all the functions inside DOMContentLoaded so as to there does not occur any not-defined error or scope error.<br>
