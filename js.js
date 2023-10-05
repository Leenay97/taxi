let img = document.querySelector('.photo');
let nameDr = document.querySelector('.name');
let names = ['すずき', 'さとう', 'いと', 'たかなし', 'たなか', 'かと', 'いのうえ', 'さいと', 'あだち'];
let wait = document.querySelector('.wait');
let start = document.querySelector('.start');
let timer;
let time = 0;
let fulltime = 0;
let priceCont = document.querySelector('.price');
let price = 500;
timer = setInterval(()=>{
    time += 1;
    if (time == 60) {
        time = 0;
    fulltime += 1;
    }
    if (time < 10) {
        wait.innerHTML = `Платное ожидание: 0${fulltime}:0${time}`
    } else {
      wait.innerHTML = `Платное ожидание: 0${fulltime}:${time}`  
    }
    price += 2;
    priceCont.innerHTML = `Стоимость: ${price}`;
    
}, 1000);
document.addEventListener('DOMContentLoaded', ()=> {
    let rnd = Math.floor(Math.random()*9);
    img.style.cssText = `background-image: url("img/${rnd}.jpg");`;
    console.log(rnd)
    nameDr.innerHTML = names[rnd];
})

start.addEventListener('click', ()=>{
    clearInterval(timer);
})