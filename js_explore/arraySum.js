var number =[101,12,20,24,89,6,76];

function allArrElemtAdd(number){
     var sum = 0;
     for(var i=0; i<number.length; i++ ){
         var element= number[i];
            sum = sum+number[i];

     }
     return sum;
}
var result = allArrElemtAdd(number);
console.log("The array adding final result is :=",result);

