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


const mssgUpdate = document.querySelector('#above');
const themeIMG = document.querySelector('.box-2-image');
const wishHeading = document.querySelector('.letters');


//img change according to time
var d = new Date();
var hr = d.getHours();

//function for morning 
function morning(){
  mssgUpdate.innerText ="Wake UP!";
  wishHeading.innerText ="Good Morning!!";
  themeIMG.style.backgroundImage = "url('./Sunny day.svg')";
}

//function for noon 
function noonAfter(){
  mssgUpdate.innerText ="Have Your Lunch!!";
      wishHeading.innerText ="Good Afternoon!!";
      themeIMG.style.backgroundImage = "url('./home.png')";
}

//function for night 
function nightFun(){
mssgUpdate.innerText ="Its Sleep Time. Have a Nice Sleep";
wishHeading.innerText ="Good Night!!";
themeIMG.style.backgroundImage = "url('./Sleep.svg')";
}

// end of clock function






function realTimeFun(){
if(hr>=5 && hr<12){  
morning();
}
else if(hr>=12 && hr<18){
noonAfter();
}
else if(hr>=18 && hr<24){
nightFun();
}
else{
  mssgUpdate.innerText ="ITS FREE TIME";
  wishHeading.innerText ="Take Rest";
  themeIMG.style.backgroundImage = "url('./timepass.svg')";
  }
};
realTimeFun();
//party btn

const partyBtn = document.querySelector('.wish-button');


partyBtn.addEventListener("click", ()=>{
      partyBtn.innerHTML ="End Party";
      mssgUpdate.innerText ="Its party Time!!";
      wishHeading.innerText ="Let's Party";
      themeIMG.style.backgroundImage = "url('./party 2.svg')";
});


  partyBtn.addEventListener("dblclick", ()=>{
    partyBtn.innerHTML ="Party Time";
    realTimeFun();
    
  });





//time slot - morning
const morningSlot = document.querySelector('.morningslot');

morningSlot.addEventListener("click", ()=>{

  morning();

});

//time slot - noon
const noonSlot = document.querySelector('.noonslot');

noonSlot.addEventListener("click", ()=>{

  noonAfter();

});

//time slot-night
const nightSlot = document.querySelector('.nightslot');

nightSlot.addEventListener("click", ()=>{



  nightFun();


});