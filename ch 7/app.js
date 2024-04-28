//                      Question No-13

var words= ['Sky', 'Earth', 'Cloud', 'river', 'Sea', 'Waterfall', 'Human', 'Animal', 'Bird'];
for(var i = 0; i < words.length; i++){
    if(words[i].length > 5){
        var value = words.indexOf(words[i]);
        words.splice(value, 1);
    }
}
console.log(words);

//                  Question No-14  

var numbers = [5, 10, 15, 20, 25];
var dummy_Number = prompt('Enter value');
var indexNumber = prompt('Enter index number');

numbers.splice(indexNumber, 0, dummy_Number);
console.log(numbers);


//                  Question No-14

var values = [5, 10, 15, 20, 25];
var user = prompt('Enter any value');
var newArr = [];
for(var i = 0; i < values.length; i++){
    if(values[i] < user){
        newArr = values.slice(0,values.indexOf(values[i])+1);
    }
}
console.log(newArr);


//                  Question No-15


// Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array. 
document.write("<br> <h2> Copy 3 array </h2>")
var cityNames = ["Karachi" , "Lahore" , "Sukkur", "Peshawar" , "Multan",];
selectedCities = cityNames.slice(0,3)

document.write( " <br>city names = " , cityNames)
document.write(" <br>selected cities = " , selectedCities )

