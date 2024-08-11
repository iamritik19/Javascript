// How to create a new Date object
const myDate = new Date();
console.log(myDate.toString()); 
// Sun Aug 11 2024 13:02:28 GMT+0530 (India Standard Time)

//Custom Dates
const customDate=new Date(2024,8,1);
console.log(customDate.toString()); 
//Sun Sep 01 2024 00:00:00 GMT+0530 (India Standard Time)

//Timestamp
const myTimestamp=Date.now();
console.log(myTimestamp); //1723361712368
//it will give time in milliseconds starting from 1st jan 1970

