var login = 'Pitter';

function message(login) {
    return (login === 'Pitter') ? 'Hi'
         : (login === 'Owner') ? 'Hello'
         : (login === '') ? 'unknown'
         : '';
}
var output = message(login);
console.log(output);