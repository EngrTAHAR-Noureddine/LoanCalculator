/* we have 
setTimeout(function_run_after_timeout , time_in_milliseconds);
use this to runfunction after time sets 
*/

//Variables 
let calculateBtn = document.getElementById('loan-form');
let showResult =document.querySelector('div.result');
let cancelBtn = document.querySelector('h3.cancel-btn');

//add Event Listener
calculateBtn.addEventListener('submit',calculateResults);
cancelBtn.addEventListener('click',cancelResultFunction);
//Functions 
//calculate Results
function calculateResults(e){
    e.preventDefault();
    console.log('Calculating...');

   
    
   const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');
   if(UIamount.value === null || UIinterest.value===null ||UIyears.value===null || UIamount.value.length===0 ||UIyears.value.length===0||UIinterest.value===0){
       alert('Check input field , please!');
   }else if((Number(UIamount.value)===NaN) || (Number(UIinterest.value)===NaN)||(Number(UIyears.value)===NaN)){
       alert('put numbers, please!!');
   }else{
    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value)/100/12;
    const calculatedPayments = parseFloat(UIyears.value)*12;

    //Compute  monthly payment
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly*calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        showResult.style.display='flex';
     
    }else{
        alert('Please check your number');
    }
   }
    
 
}

function cancelResultFunction(e){
    showResult.style.display='none';
}

