/* 1 */


/* 2 */
function anagram (word1, word2) {
    let array1 = word1.toLowerCase().split('').sort();
    let array2 = word2.toLowerCase().split('').sort();

    if(array1.length !== array2.length) {
        return false;
    }
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

/* 3 */
function sort (array){
    return array.sort().reverse()
}

