$(document).ready(function() {
    let scanner = new Instascan.Scanner({ video: document.getElementById('scanner-video') });
    
    scanner.addListener('scan', function(content) {
        alert('Scanned: ' + content);
    });

    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function(e) {
        console.error(e);
    });
});
