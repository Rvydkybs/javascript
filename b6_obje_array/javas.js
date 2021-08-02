
//OBJECTS
var student={
    name:"rüveyda",//özellik tanımlama
    surname:"kayabasi",
    school:"sakarya",
    department:"computer engineering",
    fullName:function () {
        return this.name+" "+this.surname
    },
    fn1:function () {//fonksiyon tanımlama
          return "hello"
    },
    fn2:function () {
        return  "hello too"
    }
}
document.write(student.department,"</br>")
document.write(student.fullName()," ",student.fn1()," ",student.fn2())
//If you access a method without the () parentheses, it will return the function definition

//When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
x=new String()//string tipinde obje tanımlaması
y=new Number()
z=new Boolean()
document.write("</br> ",typeof(x))
document.write("</br> </br></br></br></br>")




//STRİNG OBJECTS
let caname1="volvo2673"
let carNmae2="bmw468787"
document.writeln(caname1.length,"</br>")
//The backslash (\) escape character turns special characters into string characters:

document.writeln("we are the called \"vikings\" from the north</br>")
//If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

database=new String()
database={
    value1:"hibernate",
    value2:"maven"
}
document.writeln(typeof(database.value1)," ",database.value1.length)

let my_object=new String(2323)
document.writeln(my_object,"</br> </br></br></br>")




//DİZİLER


let array1= ["list","porp","db","soft","ware"]//bu alan hafızada yok
let array2=[];
array2[0]="m"
array2[1]="r"

let array3=new Array["dsa","ldlaş","lalkd"]//hafızada karşılıkları var-çok kullanılmaz
document.getElementById("demo").innerHTML=array1//the full array can be accessed by referring to the array name
//length-1 son elemanı verir




//DATE OBEJCTS
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// getFullYear() 	Get the year as a four digit number (yyyy)
// getMonth() 	Get the month as a number (0-11)
// getDate() 	Get the day as a number (1-31)
// getHours() 	Get the hour (0-23)
// getMinutes() 	Get the minute (0-59)
// getSeconds() 	Get the second (0-59)
// getMilliseconds() 	Get the millisecond (0-999)
// getTime() 	Get the time (milliseconds since January 1, 1970)
// getDay() 	Get the weekday as a number (0-6)
// Date.now() 	Get the time. ECMAScript 5.
let d=new Date()//browserin zamanını kullanır
document.getElementById("demo").innerHTML = d.getTime();//günlük kullandığımız zamanı verir


// setDate() 	Set the day as a number (1-31)
// setFullYear() 	Set the year (optionally month and day)
// setHours() 	Set the hour (0-23)
// setMilliseconds() 	Set the milliseconds (0-999)
// setMinutes() 	Set the minutes (0-59)
// setMonth() 	Set the month (0-11)
// setSeconds() 	Set the seconds (0-59)
// setTime() 	Set the time (milliseconds since January 1, 1970)

const d2 = new Date();
d2.setFullYear(2020);//2020 yılını kasteder



//MATH

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x

Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8 
Math.abs(-4.7);     // returns 4.7 
Math.min(0, 150, 30, 20, -8, -200);  // returns -200 
Math.max(0, 150, 30, 20, -8, -200);  // returns 150 
Math.random();     // returns a random number 

//RANDOM

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
//This JavaScript function always returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//BOOLEAN
// Very often, in programming, you will need a data type that can only have one of two values, like

//     YES / NO
//     ON / OFF
//     TRUE / FALSE

// For this, JavaScript has a Boolean data type. It can only take the values true or false.
Boolean(10 > 9)        // returns true


//STRİNG METODLARI

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
// The result in n will be:
// 6 
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);//büyük küçük harfe duyarsız
// The result in n will be:
// 6 

let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");
// The result in res will be:
// Visit W3Schools!
const pattern = /e/;
pattern.test("The best things in life are free!");//The test() method is a RegExp expression method.
// Since there is an "e" in the string, the output of the 
//code above will be:
// true 

// i 	Perform case-insensitive matching 	
// g 	Perform a global match (find all matches rather than stopping after the first match) 	
// m 	Perform multiline matching

