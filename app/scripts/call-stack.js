(() => {
    'use strict';

    let btnMakeSimpleCallStack = document.getElementById('btnMakeSimpleCallStack');

    function makeTheFisrtCall() {
        debugger;

        printSomeMessage();
    }

    function printSomeMessage() {
        var message = getFullname('Hello', 'Stack');

        console.log(message);
    }

    function getFullname(name, lastName) {
        debugger;

        return `${ name } ${ lastName }!`;
    }

    btnMakeSimpleCallStack.addEventListener('click', makeTheFisrtCall);
})();
