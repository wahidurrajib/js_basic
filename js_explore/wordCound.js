var speech = "I am a     good person. in this miend";
var count =0;
// console.log(speech[3]);
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char==" " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);