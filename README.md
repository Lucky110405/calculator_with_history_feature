<h1>Things I Learned and Implented</h1>

<ul>
<li>learnt adding event listener to multiple elements of a class.</li>
<li>learnt why let is used declare i in a for loop (to ensure that it has a local scope , if left undeclared it would have global scope which will lead to unexpected behaviour).</li>
<li>learnt we have to use innertext or textcontent in place of value property when accessing an element other than form elements.</li>
<li>learnt (got forgotten for a bit) that for an input element you have to use value property not innertext property.</li>
<li>learnt that (got forgotten) to clear the value of an input field you have to set its value as an empty string ( "" ).</li>
<li>learnt a bit more about includes() method.</li>
<li>learnt string split() method to convert a string into an array of strings.</li>
<li>learnt how to make basic calculator arithmatic calculation logic , although used ai for it , but will try and learn from it.</li>
<li>JavaScript will try to convert strings to numbers in all numeric operations except + , because + operator is also for concatenation :

This will work:

let x = "100";
let y = "10";
let z = x / y;</li>
<li>finally implemented try and catch block for error handeling.</li>
<li>added filter() method so that you can identify cases such as : 2+- , when before using filter(item => item !== "") , it is expressed as : ['2', '+', '', '-', ''] , and after using filter it is expressed as : ['2', '+', '-'] , so it becomes easy to handle invalid operator error.</li>
<li>learnt isNaN() is used to check if the o/p is NaN.</li>
<li>made a rough history section succesfullt.</li>
<li>using trim() and slice() function to select the last character of the string in order to make the backspace function of calculator.</li>
<li><strong>(very imp) <strong>Variables defined inside DOMContentLoaded are not accessible to functions defined outside it.</li>
<li>Therefore moved all the DOM element selections (and neccessary global variables) to the top of script under the DOMContentLoaded so that i dont have to write (define) it again and again, also moved all the functions inside DOMContentLoaded so as to there does not occur any not-defined error or scope error.</li>
<li>learnt you can use overflow property of css to implement scrolling in html.</li>
<li>use of "white-space: nowrap;" for effective horizontal scrolling.</li>

</ul>