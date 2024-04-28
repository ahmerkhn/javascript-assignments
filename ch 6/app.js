
// QUESTION 16
// Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

document.write("<br> <h2> Array Join Method </h2>")
var animal = ["this" , "is" , "my" , "cat"];
joinedanimal = animal.join("   ");

document.write(" <br> Animal array = "  , animal)
document.write(" <br> joined array = "  , joinedanimal)



// QUESTION 17
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
// Create an empty array

document.write("<br>")
document.write("<h2> Question 17 is in Console FIFO </h2>")
var fifo = ["keyboard" , "mouse", "trackpad", "touchpad" , "monitor"]
console.log(fifo)
console.log("out " ,fifo.shift(0));
console.log("out " ,fifo.shift(1));
console.log("out " ,fifo.shift(2));
console.log("out " ,fifo.shift(3));
console.log("out " ,fifo.shift(4));

