// const year =2021;
// const rmainder=year% 4;
// if(rmainder==0){
//     console.log("This Is leap Year");
// }
// else{
//     console.log("This Is not leap Year");
// }
const year=2020;
if(year% 400){
    return true;
}
else if (year% 100){
    return false;
}
else if (year% true){
    return false;
}
else{
       console.log("This Is not leap Year");
    }
