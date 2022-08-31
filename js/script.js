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

//pariVSdispari

function ask_pari_dispari() { //chiede all utente se pari o dispari e torna la stringa contenente la risposta
    const stringa = prompt('inserisci pari O dispari');
    console.log(stringa);
    if (stringa !== 'pari' && stringa !== 'dispari') //fa si che l'utente inserisca solo pari O dispari
        ask_pari_dispari();

    return stringa;
}

function ask_number() {

    const user_number = parseInt(prompt('inserisci numero da 1 a 5'));
    if (isNaN(user_number) || user_number < 1 || user_number > 5) {
        ask_number();
    }
    return user_number;
}

function one_to_five_generator() {
    const random = (Math.floor(Math.random() * 5)) + 1;
    return random;
}

function is_odd_or_even(number) {

    return (number % 2 === 0) ? 'pari' : 'dispari'
}

const user_choice = ask_pari_dispari();
console.log('Scelta utente: ' + user_choice);

const user_number = ask_number();
console.log('Numero utente: ' + user_number);

const pc_number = one_to_five_generator();
console.log('Numero random:' + pc_number);

let sum = user_number + pc_number;

if (is_odd_or_even(sum) === user_choice)
    console.log('Ha vinto l\'utente');
else
    console.log('Ha vinto il pc');