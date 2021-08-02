//iç içe tekrarlı fonk
// function tekrarla(startvalue){

//     if (startvalue<20) {
//         document.write("rüveyda ","</br>")
//         startvalue+=1
//         tekrarla(startvalue)//fonksiyonu tekrar çağırma
//     } else {
//         document.write("func started and over","</br>")
//     }
    
// }
// tekrarla(3)



//length:fonksiyona tanımlanan parmtr sayısı değerini geri döndürür

// function example(name,lastname,age,city) {
//     var dosome=example.length
//     document.write(dosome)
// }
// example("rüveyda","mustafa")


//arguments:fonk.a paramtre tanımlanmadan bile gelebilecek tüm prmtr değerlerini alır
// function ex() {
//     for(var start=0;start<arguments.length;start++){
//         document.write(arguments[start],"</br>")
//     }
//     document.write(arguments.length)
// }
// ex("eh ","meh"," peh"," keh")


//caller:fonku çağıran diğer fonk referans alınarak tüm bilgilerinin alınmasını sağlar
// function base() {
//     for (let index = 0; index < base.caller.arguments.length; index++) {//artık other fonkunu referans alabiliyoruz
//        document.write(other.arguments[index]+"</br>")//referans alma tamamlandı
        
//     }
// }
// function other(name,lastname) {//other'ın özelliklerine base  artık sahip
//     base()
// }
// other("rüv","kabardey")


//return içi func tanımlama
// içinde birden çok func tanımlanabilir
var person=function () {
    var lastname="kayabaşı"
    return {//çoklu işlem yapmak için {}kullandık
        isimgetir:function () {
            return lastname
        }
    }

}
var result=person()
document.write(result.isimgetir())














