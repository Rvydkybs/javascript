//alert("hellloo kız naber")//uyarı mesajı vermek için
/*   uyarı verme
var isim="rüveyda"
var soyisim=" kayabaşı"//tırnak içindeki boşluğa dikkat
window.alert(isim+soyisim) */ 


//ekrana yazdırma
/*
console.log("did it happened?")//web tarayıcısının konsoluna yazar
document.write("hello")//dökümana çıktı yapar DOM ---ekrana çıktı yapar
document.writeln(" next line")//alt satıra da geçer DOM--document object model
document.getElementById("2.").innerHTML="i changed"// getElementById elemanın id bilgisiyle ulaşma
document.getElementById("3.").innerHTML="again changed"//innerHTML verilerin içeriğini değiştiriyor
document.write("second hello </br>")
document.write("third hello </br>")
document.write("fourth hello </br>")
debugger//sayfayı çalıştırıp consol açıp yenilersek debug penceresi gelir ve kodlarımızı kontrol ederek hataları kolay 
//bulabiliriz.istenilen kısımların arasına debugger koyarız.
    //var:standart değişken tanımlama
    //let:blok kapsamlı yerel değişken tanımlama
    //const:sabit değişken tanımlama
    //değişken isimleri _ veya $ ile başlayabilir.rakamla başlayamaz,rakam içerir.



//değişken tipleri
var a=" mustafa bek"
let b="rüveyda"
const gumball=" gumball wattersan"
//document.write(b+a+"</br>")
//document.write(gumball+"</br>")

//değişken tanımlama türleri
var variable1=3,variable2=24 
document.write(variable1+variable2+"</br>")
document.write("****************************** </br>")
//local alan tanımlama
{
    var kral="hebele hübele"//eğer önüne değişken tipi yazmazsak 
    //global tanımlanmış olur
    document.write(kral+"</br>")
}
var kral=" mühtişim "
document.write(kral)
document.write(typeof(kral)+"</br>")//değişken tipini öğrenme
document.write(kral.length+"</br>")//uzunluk öğrenme
document.write("****************************** </br>")
// eval():parameterelirini js kodlarına çevirir, komut gibi çalıştırır
var number1=10
var number2=73
var result=eval("number1+number2")//işlem olarak algılar
document.write(result+"</br>")
document.write("****************************** </br>")
//trim() : baş ve sondaki boşlukları temizler
var sentencess=" hello, my name is rüveyda "
document.write(sentencess.trim()+"</br>")
document.write("****************************** </br>")
//slice():parametrelerini kopyalayarak yeni içerik oluşturur
var icerik ="java denemeleri devam ediyor ."
document.write(icerik+"</br>")
var result =icerik.slice(3,23)//3. karakterden  23'e kadar  kopyala ve yaz
document.write(result+"</br>")
document.write("****************************** </br>")
//substring():slice ile benzer görev
var metin="js çok hoşuma gitti."
var result2=metin.substring(5,8)
document.write(result2+"</br>")
document.write("****************************** </br>")
//substr():slice ile benzer
var metin="javascript dünyadaki en yaygın script dilidir"
document.write(metin.substr(3,8)+"</br>")//3'ten başla sekiz karakter al
document.write("****************************** </br>")
//concat():parametlerine ekleme yaparak yeni içerik oluşturur
var birinci_deg="rüveyda"
var ikinci_deg=" kayabaşı"
document.write(birinci_deg.concat(ikinci_deg)+"</br>")//1. deg üzerine parametreyi ekle
document.write("****************************** </br>")
//repeat():parametresine göre değişken içeriğini tekrar eder
var metin="javascript "
document.write(metin.repeat(3)+"</br>")//3 kere tekrar et
document.write("****************************** </br>")
//tostring():değişkenleri stringe çevirir
var deger=24
var result=deger.toString()//stringe çevrildi
document.write(typeof(result)+"</br>")
document.write("****************************** </br>")
//string():veriyi düz bir bir string metni yapar
var bir=Boolean(0)//geçersiz-başarısız değer
var iki=Boolean(1)//geçerli
var uc= 8
var dort=34.56
var bes=" string "
var bos=""
var yedi= new Date()
document.write(bir+"</br>")
document.write(iki+"</br>")
document.write(uc+"</br>")
document.write(dort+"</br>")
document.write(bes+"</br>")
document.write(yedi+"</br>")
document.write(String(bir))//stringe çevrildi
document.write(String(yedi))

//number():değişkeni number türüne dönüştürür
var bir=true,iki="8",uc="34.4554"
document.write(typeof(bir)," ",typeof(iki)," ",typeof(uc),"</br>")
document.write(typeof( Number(bir))," ",typeof( Number(iki))," ",typeof( Number(uc)),"</br>")
document.write("****************************** </br>")

//valueof():değişken değerini aktararak yeni bir içerik oluşturur
var degerbir="5",degeriki=4
document.write(typeof( degerbir)," ",typeof( degeriki),"</br>")
var result2=degeriki.valueOf()
var result1=degerbir.valueOf()
document.write(result1," ",result2,"</br>")


//indexof():değişken içerisinde kaç tane eşleşme olduğunu arar
var metin ="js eğitim seti"
var result=metin.indexOf("e")//kaç tane e olduğunu buldu
var result2=metin.indexOf("js",3)//3.karakterden sonra aramaya başla
document.write(result," ",result2,"</br>")

//lastindexof(): son eşleşmeyi sağlayan indexi yazar
var metin ="js eğitim seti eğitim seti seti eğitim" 
document.write(metin.lastIndexOf("eğitim",25))//en son karşılaştığı indexi yazar-25.indexe kadar bakar
search() includes() startswtih() endswith()
match() replace() split() charat() fromchar...() encodeURL...()
escape() unescape()  toupper() tolower() tolocale..()
sub() sup() big() small() bold() italics() strike() fixed()
fontcolor() fontsize() anchor() link()
*/
