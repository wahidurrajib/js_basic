var marks = [60,90,91,85,60,22,21,36,99];
var max = marks[0];
for(var i=0; i<marks.length; i++){
    var elemnt = marks[i];
    if(elemnt>max){
        max=elemnt;
    }

}
console.log("This is hight number of the class", max);