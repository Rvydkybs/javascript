// JSON.stringify :JavaScripti JSON biçimine dönüştürmek için kullanılır.

// JSON.parse : JSON nesnelerini JavaScript’e dönüştürmek için kullanılır.


// JSON.stringify örneği;

// var Kisi = {
//     isim: 'Ahmet',
//     soyisim: 'Cancan',
//     yas: 38,
//     bilgi: ['C#', 'CSS', 'PHP'],
//     site:"https:www.yazilimbilisim.net"
// };

// var jsonKisi = JSON.stringify(Kisi);

//  alert(jsonKisi);
// //json biçimi
// /*
//  {
//     "isim":"Ahmet",
//     "soyisim":"Cancan",
//     "yas":38,
//     "bilgi":["C#","CSS","PHP"],
//     "site":"https:www.yazilimbilisim.net"
//   }

	
 
// var Kisi = {
//     isim: 'Ahmet',
//     soyisim: 'Cancan',
//     yas: 38,
//     bilgi: ['C#', 'CSS', 'PHP'],
//     site:"https:www.yazilimbilisim.net"
// };
// var jsonKisi = JSON.stringify(Kisi);
//  alert(jsonKisi);
// //json biçimi
// /*
//  {
//     "isim":"Ahmet",
//     "soyisim":"Cancan",
//     "yas":38,
//     "bilgi":["C#","CSS","PHP"],
//     "site":"https:www.yazilimbilisim.net"
//   }
// */





// Ayrıca JSON,  şu doğal veri türlerine de uygulanabilir.

//     Object { … }
//     Array [ … ]
//     string,
//     number,
//     boolean :true/false,
//     null.




//     JSON biçiminden dönüştürülen yapı veri, dizi yada bir nesne olabilir. parse dönüşümü ile  yapı javascript nesnesi olarak doğrudan kullanılabilir hale  gelmiş olur.

//     Örn: 
//     var iller='["İstanbul","Ankara","İzmir","Edirne"]';     
//     var liste = JSON.parse(iller);
//      alert(liste); //İstanbul,Ankara,İzmir,Edirne




     
//     var iller='["İstanbul","Ankara","İzmir","Edirne"]';
        
//     var liste = JSON.parse(iller);
     
//      alert(liste); //İstanbul,Ankara,İzmir,Edirne
     

//GENEL TAIMLAMA
// {
//     "workers":[//elemanları obje olan bir dizi
//         {"salary":"3000"},
//         {"years":"12"}
//       ]
// }


let value1=JSON.stringify()
const text='["ford","bmw"]'
const myArr=JSON.parse(text)//diziyi js'ye dönüştürdü
document.write(myArr)
console.log()
// If your browser supports debugging, you can use console.log() to display
//  JavaScript values in the debugger window:
// a = 5;
// b = 6;
// c = a + b;
// console.log(c);

let x=32*909978
debugger//hata varsa proje burdan sonra ilerlemeyecek
document.write(x)















