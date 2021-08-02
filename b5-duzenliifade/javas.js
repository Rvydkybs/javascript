//DÜZENLİ İFADELER
//1.metod: değişken=new regexp("desen","ayarlar")
//2.metod:değişken= /desen/ayarlar


//MATCH():değişken içeriğini kontrol eder,yeni dizi oluşturur
var es="merhaba nasılsın?"
var ifade=new RegExp("rüveyda")//aranacak ifade -rüveyda-
var ifade2=/merhaba/ //merhabayı ara
var result=es.match(ifade)//es'in iiçinde ifade var mı
var result2=es.match(ifade2)
document.write(result," ",result2)

































