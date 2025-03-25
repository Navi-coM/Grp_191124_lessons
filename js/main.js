'use strict'

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('gallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 1500,
        // ... other settings
    });
})