let img = document.querySelector('.photo');
let nameDr = document.querySelector('.name');
let number = document.querySelector('.number');
let names = ['すずき', 'さとう', 'いと', 'たかなし', 'たなか', 'かと', 'いのうえ', 'さいと', 'あだち'];
let wait = document.querySelector('.wait');
let start = document.querySelector('.start');
let timer;
let time = 0;
let fulltime = 0;
let priceCont = document.querySelector('.price');
let price = 1000;
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
    number.innerHTML += `${Math.floor(Math.random()*900+100)}`;
    let rnd = Math.floor(Math.random()*9);
    img.style.cssText = `background-image: url("img/${rnd}.jpg");`;
    console.log(rnd)
    nameDr.innerHTML = names[rnd];
})

start.addEventListener('click', (e)=>{
    clearInterval(timer);
    e.target.style.cssText += 'background-color: #e3e3e3;'
})