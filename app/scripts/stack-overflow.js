(() => {
    'use strict';

    let btnRecursiveCall = document.getElementById('btnRecursiveCall');
    let txtRounds = document.getElementById('txtRounds');

    function recursiveCall() {
        recursiveCall();
    }

    function onBtnRecursiveCallClick() {
        document.getElementById('stackOverflow').style.display = 'none';

        try {
            recursiveCall();
        } catch (exception) {
            document.getElementById('stackOverflow').style.display = 'block';
            console.error('StackOverflow', exception);
        }
    }

    btnRecursiveCall.addEventListener('click', onBtnRecursiveCallClick);
})();
