var censoredwords=["sad","bad","mad"];
var customcensoredwords=[];
exports.censor=function(str){
    for (i in censoredwords) {
       str=str.replace(censoredwords[i],"***");
    }
    for(i in customcensoredwords){
        str=str.replace(customcensoredwords[i],"***");
    }
    return str;
}
exports.addcensoredword =function(word)
{
    customcensoredwords.push(word);
}
exports.getcensoredwords =function()
{
    return censoredwords.concat(customcensoredwords);
}

