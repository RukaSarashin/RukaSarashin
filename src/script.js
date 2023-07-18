const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sg = dateToday.getSeconds();
  
  if (hr<10) hr = '0'+ hr;
  if (min<10) min = '0'+ min;
  if (sg<10) sg = '0'+ sg;
  
  
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sg;
  
})
