function reversString(str){
    var revers = "";
    for(var i =0; i<str.length; i++ ){
        var char = str[i];
        revers = char + revers;

    }
    return revers;
}
var staement = "I am Bad Boy";
var forAlian = reversString(staement);
console.log(forAlian);