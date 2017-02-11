(() => {
    'use strict';

    let memoryAllocated = 0;
    let memoryChunk = [];

    let btnAllocate = document.getElementById('btnAllocate');
    let btnDeallocate = document.getElementById('btnDeallocate');
    let btnFreeAllMemory = document.getElementById('btnFreeAllMemory');

    function allocateMemory() {
        memoryChunk.push(new Array(1000000 * 10).join('.'));
        memoryAllocated += 10;

        updateView();
    }

    function deallocateMemory() {
        if (!memoryAllocated) return;

        memoryChunk.pop();
        memoryAllocated -= 10;

        updateView();
    }

    function freeAllMemory() {
        memoryChunk = [];
        memoryAllocated = 0;

        updateView();
    }

    function updateView() {
        document.getElementById('totalMemoryUsed').innerText = memoryAllocated;
    }

    btnAllocate.addEventListener('click', allocateMemory);
    btnDeallocate.addEventListener('click', deallocateMemory);
    btnFreeAllMemory.addEventListener('click', freeAllMemory);
})();
