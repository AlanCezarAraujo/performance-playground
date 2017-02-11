(() => {
    'use strict';

    let template = '<div class="box">CSS <br>Is <br>Awesome!!!</div> ';

    var leak = {
        divs: []
    };

    const heavyDOMContainer = document.getElementById('heavyDOMContainer');
    const btnInsertElements = document.getElementById('btnInsertElements');
    const btnRemoveElements = document.getElementById('btnRemoveElements');
    const btnFixLeak = document.getElementById('btnFixLeak');

    function insertElements() {
        heavyDOMContainer.innerHTML += template.repeat(10000);

        leakElements(heavyDOMContainer);
    }

    function leakElements(elements) {
        let childrenCount = elements.childElementCount;

        while (childrenCount) {
            --childrenCount;

            leak.divs.push(elements.children[childrenCount]);
        }
    }

    function removeElements() {
        heavyDOMContainer.innerHTML = '';

        console.log('Leaked elements:', leak);
    }

    function fixDOMLeak() {
        leak.divs = [];
    }

    btnInsertElements.addEventListener('click', insertElements);
    btnRemoveElements.addEventListener('click', removeElements);
    btnFixLeak.addEventListener('click', fixDOMLeak);
})();
