import Szemely from "./szemely.js";
$(function(){
    const szuloElem = $(".tarolo");
    console.log("hahó");
    const obj = {}
    const szemely1 = new Szemely("Béla", 1968, szuloElem)
    console.log(szemely1);
    console.log(szemely1.nev);
    const szemely2 = new Szemely("Mucika",1983, szuloElem)
    szemely2.nev="Jolán";
    console.log(szemely2.nev);
    console.log(szemely2.kor());


})