const exitMessage = document.getElementById('exit-message');
const exitBlur = document.getElementById('exit-blur');
const gameBody = document.getElementById('body');
const homescreen2 = document.getElementById('homescreen');

function toggleExitMessage() {
    exitMessage.style.display = 'block';
    exitBlur.style.display = 'block';
}

function keepPlaying() {
    if(exitMessage.style.display = 'block') {
        exitMessage.style.display = 'none';
        exitBlur.style.display = 'none';
    }
}

function quit() {
    if(exitMessage.style.display = 'block') {
        exitMessage.style.display = 'none';
        exitBlur.style.display = 'none';
        gameBody.style.display = 'none';
        homescreen2.style.display = 'block';
    }
}