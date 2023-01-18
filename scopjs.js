// "use strict" java script akan paham kita akan membuat variable lokal
// global scope

let i = 2;
if (i % 2 == 0) {
  // variable lokal hanya bisa diakses didalam function
  var genap = true;
  console.log(i);
}

if (genap) {
  console.log('genap');
}

// var a = 1;
// function tes() {
//   var b = 2;
//   dari dalam function bisa akses variable global
// tetapi sebaliknya dari luar kita tidak bisa akses variable yang ada didalam function,kecuali kita beri keyword window
//   console.log(a);
// }
// tes();
// console.log(b);

// var a = 1;
// function tes() {
// name conflick 2 variable namanya sama tapi scopenya berbeda
//   var a = 2;
//   console.log(window.a);
// }
// tes();
// console.log(a);

// 'use strict';

function tes() {
  //    tanpa keyword var, cari dulu ada atau enggak variable lokal, klo gak ada cek ke variable global klo gak ada maka otomatis akan dibuatkan variable global
  a = 2;
}
tes();
console.log(a);
