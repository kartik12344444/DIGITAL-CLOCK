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
const HeadingBox = document.querySelector('.heading');

//img change according to time
var d = new Date();
var hr = d.getHours();

//function for morning time section
function morning(){
  mssgUpdate.innerText ="Wake UP!";
  wishHeading.innerText ="Good Morning!!";
  themeIMG.style.backgroundImage = "url('./Sunny day.svg')";
}

//function for afternoon 
function noonAfter(){
  mssgUpdate.innerText ="Have Your Lunch!!";
  wishHeading.innerText ="Good Afternoon!!";
  themeIMG.style.backgroundImage = "url('./home.png')";
}

//function for night time section
function nightFun(){
 mssgUpdate.innerText ="Its Sleep Time. Have a Nice Sleep";
 wishHeading.innerText ="Good Night!!";
 themeIMG.style.backgroundImage = "url('./Sleep.svg')";
}
function freetime(){
  mssgUpdate.innerText ="Its Your Free Time";
  wishHeading.innerText ="";
  themeIMG.style.backgroundImage = "url('./timepass.svg')";
  }
  freetime();







const partyBtn = document.querySelector('.wish-button');


partyBtn.addEventListener("click", ()=>{
      partyBtn.innerHTML ="End Party";
      mssgUpdate.innerText ="Its party Time!!";
      wishHeading.innerText ="Let's Party";
      themeIMG.style.backgroundImage = "url('./party 2.svg'";
});


  partyBtn.addEventListener("dblclick", ()=>{
    partyBtn.innerHTML ="Party Time";
    freetime();
    
  });





//time slot - morning
const morningSlot = document.querySelector('.morningslot');

morningSlot.addEventListener("change", function (){
  console.log(hr);
  console.log(this.value);

  if(this.value==hr){
    morning();
  }
  else{
    mssgUpdate.innerText ="Its Your Free Time";
    HeadingBox.style.display="none";
    themeIMG.style.backgroundImage ="url('./timepass.svg')";
  }

});

//time slot - noon
const noonSlot = document.querySelector('.noonslot');
noonSlot.addEventListener("change", function (){
 if(this.value==hr){
  noonAfter();
 }
 else{
  mssgUpdate.innerText ="Its Your Free Time";
  wishHeading.innerText ="";
  HeadingBox.style.display="none";
  themeIMG.style.backgroundImage = "url('./timepass.svg')";
 }

});

//time slot-night
const nightSlot = document.querySelector('.nightslot');
nightSlot.addEventListener("change", function (){
 if(this.value==hr){
  nightFun();
 }
 else{
  mssgUpdate.innerText ="Its Your Free Time";
  wishHeading.innerText ="";
  HeadingBox.style.display="none";
  themeIMG.style.backgroundImage = "url('./timepass.svg')"; 
 }
});












// function realTimeFun(){
// if(hr>=5 && hr<12){  
// morning();
// }
// else if(hr>=12 && hr<18){
// noonAfter();
// }
// else if(hr>=18 && hr<24){
// nightFun();
// }
// else{
//   mssgUpdate.innerText ="ITS FREE TIME";
//   wishHeading.innerText ="Take Rest";
//   themeIMG.style.backgroundImage = "url('./timepass.svg')";
//   }
// };
// realTimeFun();
//party btn