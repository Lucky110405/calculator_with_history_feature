learnt adding event listener to multiple elements of a class.
learnt why let is used declare i in a for loop (to ensure that it has a local scope , if left undeclared it would have global scope which will lead to unexpected behaviour).
learnt we have to use innertext or textcontent in place of value property when accessing an element other than form elements.
learnt (got forgotten for a bit) that for an input element you have to use value property not innertext property.
learnt that (got forgotten) to clear the value of an input field you have to set its value as an empty string ( "" ).
learnt a bit more about includes() method.
learnt string split() method to convert a string into an array of strings.
learnt how to make basic calculator logic , although used ai for it , but will try and learn from it.
JavaScript will try to convert strings to numbers in all numeric operations except + , because + operator is also for concatenation :

This will work:

let x = "100";
let y = "10";
let z = x / y;