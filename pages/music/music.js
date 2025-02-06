const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#773aa8',
    barWidth: 2,
    height: 80,
    responsive: true
});

wavesurfer.load('../../res/Dark Convergence.ogg');
let playBTN = document.getElementById('player-play');  
playBTN.addEventListener('click', () => {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        playBTN.setAttribute("d","M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z");
    } else {
        wavesurfer.play();
        playBTN.setAttribute("d","M 14,10 H 17 V 26 H 14 Z M 20,10 H 23 V 26 H 20 Z");
    }
});
