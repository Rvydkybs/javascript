// // if-else if-else
// var value1=500
// var value2=500
// if(value1<value2){
//     document.write("birinci değer ikinciden küçük </br>")
// }
// else if(value1>value2){
//     document.write("birinci değer ikinciden büyük </br>")
// }
// else{
//     document.write("ikisi de eşit")
// }


// var value1=5002332
// var value2=500
// if(value1!=value2&&value2>=0&&value1!=923892){
//     document.write("hello")
// }



//*****************************switch-case***********************
// var mytext="aaa"
// var uzunluk=mytext.length// length için  () kullanmadık program çalıştı
// switch(uzunluk)
// {
//     case 1://uzunluk 1 ise
//         document.write("karakter sayısı 1")
//         break
//     case 2:
//         document.write("karakter sayısı 2")
//         break
//     case 3:
//         document.write("karakter sayısı x")
//         break
//     default:
//         document.write("empty")
// }

//********************ternary************************/
//?: =ternary operatörü--koşul () yazılabilir
//koşul ? çalışacak ifade 1:çalışacak ifade 2:
//document.write(4<5?"koşul doğru ise":"koşul doğru değil ise")
 
//try-catch-finally***********************************
//try=hata oluşabilecek kodlar
//catch=hata oluşursa çalıştırılacak kodlar
//finally=hata olsa da olmasa çalışacak
//throw=hata oluşabilecek kodlar için istisnai durumlar
// try {
//     var names="rüveyda"
//     document.write(names,"</br>")
//     document.write(soyisim)//hata oluşturan kısım
// } catch (error) {
//     document.write("hata oluştu")
//     document.write(error)//hata tipini yazdı
// }


//finally***********************************************

// try {
//     var names="rüveyda"
//     document.write(names,"</br>")
//     document.write(soyisim)//hata oluşturan kısım
// } catch (error) {
//     document.write("hata oluştu </br>")
//     document.write(error)//hata tipini yazdı
// }
// finally{
//     document.write("hata olsa da olmasa da çalıştı </br>")
// }

//throw*********************************
try {
    var names="rüveyda"
    throw("soyisim değişkeni yok </br>")//throw istisnai durum olduğu için
    //yazıldığı konum önemli çünkü kendinden sonrası önemsiz hale geliyor.
    //   throw(error) yazılabilir
    document.write(names,"</br>")
    document.write(soyisim)//hata oluşturan kısım
} catch (error) {
    document.write("hata oluştu </br>")
    document.write(error)//throw içindeki değeri yazar
}
finally{
    document.write("hata olsa da olmasa da çalıştı </br>")
}
