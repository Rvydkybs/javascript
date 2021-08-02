//TRY-CATCH
// try {
//     document.write("everything is alright")
// } catch (err) {
//     document.getElementById("demo").innerHTML=err.message
// }

//THROW
//bir string,boolean,number ve obje türünde hata verir  :
// throw "to big"//kendinden sonrakileri kabul etmez!



//Input Validation Example-giriş doğrulama örneği
// function myFunction() {
//     const message=document.getElementById("p01")
//     message.innerHTML=""
//     let x=document.getElementsByTagName("demo").value
//     try {
//         if(x=="") throw "empty"
//         if(isNaN(x)) throw "not a number"//hep bu mesajı veriyor!
//         x=Number(x)
//         if(x<5) throw "to low"
//         if(x>10) throw "to high"
//     } catch (err) {
//         message.innerHTML="input is"+err
//     }
// }



//FİNALLY
// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
//   finally {
//     Block of code to be executed regardless of the try / catch result
//   } 

// HTML VE JS BİRLİKTE KOD TANIMLARKEN ADIM SIRASI BU ŞEKİLDE OLUR
// <input id="demo" type="number" min="5" max="10" step="1">




// In an object method, this refers to the "owner" of the method
// fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }

// When used alone, the owner is the Global object, so this refers to the Global object.
// let x = this; 

// In strict mode, when used alone, this also refers to the Global object [object Window]:
// "use strict";
// let x = this; 

// in a function, this refers to the Global object
// function myFunction() {
//     return this;
//   }

// when used in a function, in strict mode, this is undefined.
// "use strict";
// function myFunction() {
//     return this;
//  }

// In HTML event handlers, this refers to the HTML element that received the event:
// <button onclick="this.style.display='none'">
//  Click to Remove Me!
// </button> 

// this is the person object
// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };



//strict mode
//kodu "katı modda" yürütür ve tanımlanmamış değişkenler kullanılamaz
// "use strict";
// x = 3.14     // This will cause an error because x is not declared
// document.write(x)



//this:
// The JavaScript this keyword refers to the object it belongs to. 
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };



//arrow function:
hello = function() {
    return "Hello World!"
  } //halinden şuna dömüşür:
hello=()=>{
    return "hello world"
}
hello()

