console.log("Hello World");


let dolarBugun = 9.30;
let dolarDun = 9.20;

{
    let dolarDun = 9.10;
}

console.log(dolarDun);


const euroDun = 11.2;
// euroDun = 11;  



console.log(euroDun);

//Javascript değişken tanımları camelCase tanımlanır

//array kullanımı
let konutKredileri = ["Özel Konut Kredisi", "Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];

console.log(konutKredileri);



console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");