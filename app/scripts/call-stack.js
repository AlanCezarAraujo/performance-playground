(() => {
    'use strict';

    let btnMakeSimpleCallStack = document.getElementById('btnMakeSimpleCallStack');

    function makeTheFisrtCall() {
        printSomeMessage();
    }

    function printSomeMessage() {
        var message = getFullname('Hello', 'Stack');

        console.log(message);
    }

    function getFullname(name, lastName) {
        return `${ name } ${ lastName }!`;
    }

    btnMakeSimpleCallStack.addEventListener('click', makeTheFisrtCall);
})();
