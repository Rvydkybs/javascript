// In JavaScript, almost "everything" is an object.

//     Booleans can be objects (if defined with the new keyword)
//     Numbers can be objects (if defined with the new keyword)
//     Strings can be objects (if defined with the new keyword)
//     Dates are always objects
//     Maths are always objects
//     Regular expressions are always objects
//     Arrays are always objects
//     Functions are always objects
//     Objects are always objects

let person={
    firstName:"rüveyda",
    lastName:"kayabaşı",
   cars:{
       year:"7287"
   },
   myFunc: function () {
       return this.firstName+" "+this.lastName+"hebele </br>"
   }
}
document.write(person.lastName,"</br>")

let person_2=new Object()
person_2.list="listeleme"
person_2.array="array"
document.write(person_2.list+" "+person.lastName+person.cars.year+"</br>")
//nesne üretmeye çalıştım:
// document.write(person.myFunc())
// var result=document.getElementsById("demo")
// document.getElementById("demo").innerHTML=person //index sayfasıyla bağlantılı
// const myArray=Object.values(person_2)
// document.getElementsById("demo").innerHTML=myArray


// Accessing JavaScript Properties:

// The syntax for accessing the property of an object is:
// objectName.property      // person.age

// or
// objectName["property"]   // person["age"]

// or
//objectName[expression]   // x = "age"; person[x]


for (let x in person) {//forin döngüsü ile obje içide dolaşma!çalışmadı
   var txt=person[x]
 }
//delete person.firstName//bu değer silindi


// Nested Arrays and Objects:
const myObj = {
    name: "John",
    age: 30,
    cars: [
       {name:"Ford", "models":["Fiesta", "Focus", "Mustang"]},
       {name:"BMW", "models":["320", "X3", "X5"]},
       {name:"Fiat", "models":["500", "Panda"]}
    ]

} 
//YAPICI FONKSİYON
// function myObj(first,second) {
//     this.first=first
//     this.second=second
// }

// const x=new myObj("1","2")

// JSON.stringify()
// Herhangi bir JavaScript nesnesi, JSON.stringify() JavaScript işleviyle dizelenebilir (bir dizeye dönüştürülebilir):
const newOBJ={
    year:"1997",
    name:"regular show",
    second_name:"my favourite show"
}

let mysString=JSON.stringify(newOBJ)//sadece objerleri değil dizileri de bu şekilde stringe dönüştürebiliriz
document.write (mysString+"</br>")


// The Object.defineProperty() method can also be used to add Getters
//  and Setters:

// Define object
const obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});
// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;




//map object
const apples={
    name:"apples",
    age:"22"
}
const bananas={
    name:"bananas"
}
const oranges={
    name:"oranges"
}
//create a new map:
const fruits=new Map()
//add new elements to map object:
fruits.set(apples.age,34)//yeni değer verdik
fruits.set(bananas,300)
var r=fruits.set(oranges,200)
document.write(r)
fruits.get(apples)//sahip olduğu değeri döndürdük
document.write(fruits.get(apples.age))
// Other Map() Methods
// clear()	Removes all elements in a Map
// delete()	Removes an element specified by a key.
// has()	Returns true if a key exists.
// forEach()	Invokes a callback for each key/value pair.


//SET OBJELERİ
const a = "a"
const b = "b"
const c = "c"
// Create a Set
const letters = new Set()

// Add the values to the Set
letters.add(a)
letters.add(b)
document.write(letters.add(c))
//If you add equal elements, only the first will be saved


// Set Object Methods and Properties
// new Set()	Creates a new Set object
// add()	Adds a new element to the Set
// clear()	Removes all elements from a Set
// delete()	Removes an element specified by its value.
// entries()	Returns an array of the values in a Set object
// has()	Returns true if a value exists
// forEach()	Invokes a callback for each element
// keys()	Returns an array of the values in a Set object
// values()	Same as keys()
// size	Returns the element count 

function myFunk(param) {
  document.getElementById("demo").innerHTML=param
}
function myCalculator(num1,num2) {
  let sum=num1+num2
  return sum
}
let result=myCalculator(5,6)
myFunk(result)

setTimeout(myname)//calback yapmanın kısa yolu
function myname() {
  document.getElementById("demo").innerHTML="i am an engineer"
}



