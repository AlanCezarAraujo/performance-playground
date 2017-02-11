(() => {
    'use strict';

    let btnRecursiveCall = document.getElementById('btnRecursiveCall');
    let txtRounds = document.getElementById('txtRounds');
    let calls = 0;

    function recursiveCall() {
        ++calls;

        recursiveCall();
    }

    function onBtnRecursiveCallClick() {
        document.getElementById('stackOverflow').style.display = 'none';

        try {
            recursiveCall();
        } catch (exception) {
            document.getElementById('stackOverflow').style.display = 'block';

            console.info(`The program has crashed after ${calls} calls`)
            console.error(exception);
        }
    }

    btnRecursiveCall.addEventListener('click', onBtnRecursiveCallClick);
})();
