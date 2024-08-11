//How much time does it take to sum a number from 1 to 10^9.

function calculateSum(n){
    sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
const timeBeforeFunctionExecuted=Date.now();
const ans=calculateSum(1000000000);
const timeAfterFunctionExecuted=Date.now();
console.log(`time required to run sum function is ${Math.floor((timeAfterFunctionExecuted-timeBeforeFunctionExecuted)/1000)} sec`);

// time required to run sum function is 8 sec
