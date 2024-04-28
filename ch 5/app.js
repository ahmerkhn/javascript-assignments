//                       question NO 10

var fruits = ["apple", "banana", "cherry", "date", "fig"];
var selectedFruits = fruits.slice(2,4);
console.log(selectedFruits);

//                      Question No-11

var temperatures = [72, 78, 82, 88, 95, ];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(var i = 0; i < temperatures.length; i++){
    if(temperatures[i] > 80){
        console.log(days[i] + ' ' + temperatures[i] + ' ' + 'F');
    }
}

//                      Question No-12

var numbers = [5, 10, 15, 20, 25];
numbers.splice(2,0,12);
console.log(numbers);

