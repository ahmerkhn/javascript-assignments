// Question 18
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)

document.write("<br>")
document.write("<h2> Question 18 is in Console LIFO </h2>")
var lifo = ["motorola" , "iphone", "google pixel", "nothing" , "samsung"]
console.log(lifo)
console.log("out " ,lifo.pop(0));
console.log("out " ,lifo.pop(1));
console.log("out " ,lifo.pop(2));
console.log("out " ,lifo.pop(3));
console.log("out " ,lifo.pop(4));

// QUESTION 19
// Write a program to store phone manufacturers (Apple,
  // Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
  // the following dropdown/select menu in your browser using
  // document.write() method:

   document.write("<br>");
   document.write("<h3> Dropdown </h3>")
    const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    function createDropdown() {
       
        const select = document.createElement("select");

 
        const defaultOption = document.createElement("option");
        defaultOption.text = "Select a Manufacturer";
        defaultOption.value = "";
        select.add(defaultOption);

        for (const manufacturer of manufacturers) {
            const option = document.createElement("option");
            option.text = manufacturer;
            option.value = manufacturer;
            select.add(option);
        }
        document.write(select.outerHTML);
    }

    createDropdown()