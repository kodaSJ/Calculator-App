console.log('HTML is connected to JS file')

//return the value of the button being pressed to the input element
function displayResults(selected){
  //Create a variable for the result  
   const display = document.getElementById("result");
   display.value += selected;
}

function clearDisplay() {
   //This function clears the result when 'C' is clicked 
   const display = document.getElementById("result");
   display.value = ''
}

function calculating() {
   //This function should calculate the total of the sum
   const display = document.getElementById("result");
   //Use a switch statement to determine which function to call based on the operator ('+', '-', '/', '*')
  
}


// let num1 = 0
// let num2 = 0
// let addTotal = 0
// let subTotal = 0
// let divTotal = 0
// let multiTotal = 0

//     function addSum(num1,num2){
//         const addition = num1 + num2
//         addTotal += addition
//      if(addTotal >= 0) {
//          return addTotal
//         } else {
//             return 'Unable to calculate...please try again'
//         }
//     }
//     function subSum(num1,num2){
//         const subtract = num1 - num2
//         subTotal += subtract
//      if (subTotal >= 0) {
//          return subTotal
//         }else {
//             return 'Unable to calculate...please try again'
//      }
//      }

//     function diviSum(num1,num2){
//         const divide = num1 / num2
//         divTotal += divide
//      if (divTotal >= 0) {
//         return divTotal
//      } else {
//         return 'Unable to calculate...please try again'
//      }
//     }
    
//     function multiSum(num1,num2){
//         const multiply = num1 * num2 
//         multiTotal += multiply
//      if (multiTotal >= 0) {
//         return multiTotal
//      } else {
//         return 'Unable to calculate...please try again'
//      }
//     }
