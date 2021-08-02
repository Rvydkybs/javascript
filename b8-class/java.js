// A JavaScript class is not an object.
// It is a template(şablon) for JavaScript objects.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.

class myClass{
    myClass(){//Constructor Method
        document.write("hello world","</br>")
    }
}
class myCar{
    myCar(name,year){//Constructor Method
        this.name=name
        this.year=year
        document.write(name," ",year,"</br>")
    }
}
//nesne oluşturma:
let m1=new myClass()
let m2=new myCar()
m1.myClass()
m2.myCar("volvo","2021")

