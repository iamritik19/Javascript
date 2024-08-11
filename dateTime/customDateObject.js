const myDate=new Date();
const dateObj=myDate.toLocaleString('en-us',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    hour12:true
});
console.log(dateObj);
// 08/11/2024, 1:08:59 PM