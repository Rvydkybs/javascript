//DİZİ METOTLARI İÇİN 179. DERSTEN BAŞLA
//MATEMATİKSEL İŞLEMLER 210.DERS

//1.normal dizi oluşturma
// var isimler=[23,25452,"2423","mustafa ","bek"]
// //2.nesnesel dizi oluştuma;
// var dizi=new Array("ehebele",34242,"fsödlkdsk sdjfkljslk","342")
// for (let index = 0; index < isimler.length; index++) {
//       document.write(isimler[index],"</br>")  
  
// }
//  for (let index = 0; index < isimler.length; index++) {//dizinin3.elemanını değiştirme
//         if (index==3) {
//             isimler[3]=0
          
//         }
//     document.write(isimler[index],"</br>")
//     }

// dizi=isimler//isimler dizisi "dizi" dizisine atıldı
// document.write(dizi+"</br> **************************************")  //dizinin büyün elemanları yazılır
 




//3.
// var renkler=[7],kahveler=[],saçlar=[]//birden çok dizi tanımlama
// const isimler2="rüveyda ve mustafa"//bu değer artık değiştirilemez-dizilerde değişebilir
// document.writeln("</br>",isimler2[5])//5.karakter katarı yazdırılır, katarı dizi gibi görür
// renkler[0]="kırmızı"//dizi 7 elemeanlı tanımlandığı için,kalan eksik elemanlar ,,,diye gösterilecek
// renkler[1]="mor"
// renkler[2]="turuncu"
// document.writeln(renkler)




//indisleri değişken yapmak
// var gunler=new Array(7)
// gunler["birincigun"]="pazartesi"//index yerine değişken verdik
// gunler["ikincigun"]="salı"
// gunler["ucuncugun"]="çarş"
// gunler["dorduncugun"]="perş"
// gunler["besincigun"]="cuma"
// gunler["altıncıgun"]="cmtesi"
// gunler["yedincigun"]="pazar"
// document.writeln(gunler["besincigun"])//indisleri değişken olarak tanımladığımız için mutlaka hangi elemanı
// //çağırdığımızı belirtmeliyiz




//iç içe diziler
// var names=["kabardey","besleney",["avunis","vurdem","bolet"],"abzeh","abhaz","peçenek"]
// document.writeln(names[2])
// document.writeln(names[2][1],"</br> **************** </br>")//bu boyutları istediğimiz kadar arttırabiliriz
//ikinci örnek;
// var colours=["turuncu","sarı","yeşil"]
// var names=["mert","jannart","dinemis"]
// document.write(colours,"</br>")
// document.write(names,"</br>")
// var result=[colours,names]//.ok boyutlu dizi oluşturduk

// document.write(result[0][1],"</br>")//colors içindeki 1.index




//HAZIR FONKSİYONLAR
//isarray():içeriğin dizi olup olmadığını kabul eder
//boolean değer döndürür
// var example="js eğitim seti"
// var result= Array.isArray(example)
// document.write(result)



 
//dizi içinde gezme
// var dizi=["melike","cansu","furkan","dilek"]
// var text="js öğrenmeye devam ediyorum çünkü zekiyim"
// for (index in text) {
//     document.write(text[index])
// }


//fonksiyonları:

//1-delete:index değerini siler
// var dizi=new Array("dolap","komidin","sehpa")
// delete dizi[1]
// document.write(dizi)

//2-pop:son elemanı siler,sildiği elamanın değerinin döndürür
// var dizi=["ahmet","malı","ben","bilmiyorum"]
// var result=dizi.pop()
// document.write(dizi,"</br> döndürülen eleman")
// document.write(result)

//3-shift:ilk elamnın değerini siler ve geri döndürür
// var dizi=["ahmet","malı","ben","bilmiyorum"]
// var result=dizi.shift()
// document.write(dizi)

//4-push:dizinin sonuna elemanlar ekler
// var dizi=["ahmet","malı","ben","bilmiyorum"]
// dizi.push("selam","akıl ver bana ")
// document.write(dizi)

//5-unshift:dizi başına eleman ekler
// var dizi=["ahmet","malı","ben","bilmiyorum"]
// dizi.unshift("selam","akıl ver bana ")
// document.write(dizi)

//6-splice:eleman ekler veya siler
// var dizi=["ahmet","malı","ben","bilmiyorum"]
// var result=dizi.splice(2,1)//2.indisten başla 1 eleman sil
// var newresult=dizi.splice(3,0,"helllooow")
// document.write(dizi)

//7-slice:istenilen ögeleri kopyalar yeni dizi oluşturur değerini döndürür
// var dizi=["ahmet","malı","ben","bilmiyorum","iyiyim","galiba"]
// var result=dizi.slice(2)//2.idisten sonrasını aldı
// document.write(result,"</br>")
// var result=dizi.slice(2,4)//2-4 arasını aldı
// document.write(result)

//8-copwithin:dizi elemanlarını değiştirir ve diziyi döndürür
// var dizi=["ahmet","malı","ben","bilmiyorum","iyiyim","galiba"]
// var result=dizi.copyWithin(1,3,4)//hedef-başlangıç-bitiş
// document.write(result,"</br>")


//9-fill:dizi elemanlarını değiştirir ve diziyi döndürür
// var dizi=["ayva","erik","muz","karpuz","ananas","şeftali"]
// dizi.fill("nar",3,5)//değer-başlangıç-bitiş
// document.write(dizi,"</br>")


//10-conact:yeni dizi oluşturur return eder
// var dizi=["ayva","erik","muz","karpuz","ananas","şeftali"]
// var dizi2=["ayva","kivi","muz","karpuz","ananas","şeftali"]
// var result=dizi.concat(dizi2)
// document.write(result,"</br>")

//11-join:elemanların arasına string tipinde düz metin oluşturur return eder
// var dizi=["ayva","erik","muz","karpuz","ananas","şeftali"]
// var result=dizi.join()//dizi artık string oldu
// var typewhat=typeof(result)
// document.write(result,"</br>")
// document.write(typewhat,"</br>")


















