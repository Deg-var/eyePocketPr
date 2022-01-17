let back = document.querySelector('.blm')
let less = document.querySelector('.less')

let more = document.querySelector('.more')

// let l = 160;
back.style.height = l +'px'
back.style.width = l +'px'
console.log(back)
less.onclick = function(){
  l--
back.style.height = l - 1 + 'px'
back.style.width = l - 1 +'px'
console.log(back.getBoundingClientRect().width)}
more.onclick = function(){
  l++
back.style.height = l + 1 + 'px'
back.style.width = l + 1 +'px'}



  document.querySelector('.block').onmousemove = function(event) {
  event = event || window.event; // кроссбраузерность
  // console.log(event.offsetY/document.documentElement.clientHeight); // вывод в консоль

  document.querySelector('.corx').innerHTML = event.clientX;
  document.querySelector('.cory').innerHTML = event.clientY;
  
back.style.backgroundPositionY= 50 - ((document.documentElement.clientHeight/2-event.offsetY)/document.documentElement.clientHeight) * 90 + '%';
back.style.backgroundPositionX= 50 - ((document.documentElement.clientWidth/2-event.offsetX)/document.documentElement.clientWidth) * 90 + '%';

// console.log(back[0].style.backgroundPositionY)
//  console.log(back[0].style.backgroundPositionX)
 console.log('....');
//  console.log(event.offsetX+event.offsetY)

}  
// console.log(back.style.backgroundPositionY)

