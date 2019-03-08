AFRAME.registerComponent('set-camera', {
    init: function () {
        var el = this.el;
        // First we grab the new position from the HTML code
        el.addEventListener('click', function () {
            var camera = document.querySelector('#Camera'),
                newX = el.getAttribute('data-newX'),
                newY = el.getAttribute('data-newY'),
                newZ = el.getAttribute('data-newZ');
            // Then we change the camera's position to these values
            camera.setAttribute('position', {x: newX, y: newY, z: newZ});
        });
    }
});    