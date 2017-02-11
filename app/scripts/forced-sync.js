(() => {
    'use strict';

    var raf;
    var isAnimating = false;
    var $btnToggleAnimation = document.querySelector('#btnToggleAnimation');
    var $container = document.querySelector('#jank-container');
    var $movers;

    (function init() {
        $container.innerHTML = '<div class="mover"></div>'.repeat('400');

        $movers = document.querySelectorAll('.mover');

        setMoversTopPosition();
    })();

    // animation loop
    function update(timestamp) {
        for (var mover = 0; mover < $movers.length; mover++) {
            // $movers[mover].style.left = ((Math.sin($movers[mover].offsetTop + timestamp / 1000) + 1) * 500) + 'px';
            $movers[mover].style.left = ((Math.sin(mover + timestamp/1000)+1) * 500) + 'px';
        }
        raf = window.requestAnimationFrame(update);
    }

    function toggleAnimation(event) {
        if (isAnimating) {
            window.cancelAnimationFrame(raf);
        } else {
            raf = window.requestAnimationFrame(update);
        }

        isAnimating = !isAnimating;

        event.currentTarget.innerHTML = isAnimating ? 'Stop' : 'Start';
    }

    function setMoversTopPosition() {
        $movers[0].style.top = '50px';

        // Set the tops of each DOM element
        for (var mover = 1; mover < $movers.length; mover++) {
            $movers[mover].style.top = (mover * 20) + 'px';
        }
    }

    $btnToggleAnimation.addEventListener('click', toggleAnimation);
})();
