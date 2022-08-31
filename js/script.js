function is_palindrome(word) {
    let i_reverse = word.length - 1;
    for (let i = 0; i < (word.length) / 2; i++) {
        if (word[i] != word[i_reverse]) {
            return false;
        }
        i_reverse--;
    }
    return true;
}

const stringa = prompt('inserisci parola');

if (is_palindrome(stringa))
    console.log('palindroma');
else
    console.log('non palindroma');
