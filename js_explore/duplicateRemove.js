var id=[100,32,32,56,56,100,1,2,3,1,8];
var setUnick =[];
for(var i=0; i<id.length; i++){
    var element = id[i];
    var index = setUnick.indexOf(element);
    if(index==-1){
        setUnick.push(element);
    }
}
console.log("The main value is",setUnick);
