let sayac = 0;
let sayacElementi = document.getElementById("suSayaci");

setInterval(() => {
  sayac += 10; // her saniyede 10 litre ekle
  sayacElementi.textContent = sayac.toLocaleString(); // sayıyı ekranda güncelle
}, 1000);
