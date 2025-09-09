let word = ""
function checkPalindrome(word){
    let meter = word.length;
    for (i=0;i<meter;i++){
        if (word.charAt(i)!= word.charAt(meter-1-i)){
        return word + " This is not a Palindrome";
            
        }
    }
    return word + " This a Palindrome";
}
console.log (checkPalindrome("mom"));