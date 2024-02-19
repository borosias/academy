function includesCustom(text, matchStr, index) {
    text = text.toString(); matchStr = matchStr.toString();
    if (index === undefined || index === null) {
        index = 0;
    }
    let [j, matchCount] = [0,0];
    for (let i = index; i < text.length; i++) {
        if (text[i] === matchStr[j]) {
            j++;
            matchCount++;
            if (matchCount === matchStr.length) return true;
        } else if (text[i]===matchStr[0]){
            [j, matchCount] = [0,0];
        } else {
            [j, matchCount] = [0,0];
        }
    }
    return false;

}



console.log(includesCustom("if i was true so u lose this fight! ",true));