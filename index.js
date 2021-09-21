const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();   
     hourTime.innerHTML =    `${concatZero((h % 12) || 12)}`
     minTime.innerHTML  =    `${concatZero(m)}`
     secTime.innerHTML  =    `${concatZero(s)}`
     aMpM.innerHTML     =    `${h >= 12 ? 'PM' : 'AM'}`
}
setInterval(time, 1000);