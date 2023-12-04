

function processTitle(title){
    const titleArray = title.toLowerCase()
    let realString = ""
    for(let i = 0; i< titleArray.length; i++){
        if(titleArray[i] == " "){
            realString += "_";
        }else{
            realString += titleArray[i];
        }
    }

    return(realString);
}

console.log(processTitle(("The Mor Of god")))