$( document ).ready(function(){
  var age = document.querySelector("span#age");
  let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
  if(month>=2){
    if(day==1 && month ==2)
    age.innerText=year-2000;
    else
    age.innerText=year-1999;
  }else{
  age.innerText=year-2000;
  }
});

