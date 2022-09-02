const exitMessage = document.getElementById('exit-message');
const exitBlur = document.getElementById('exit-blur');
const gameBody = document.getElementById('body');
const pageContainer2 = document.getElementById('page-container');
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

//Quits the game, returning the the Start Menu
function quit() {
    if(exitMessage.style.display = 'block') {
        exitMessage.style.display = 'none';
        exitBlur.style.display = 'none';
        gameBody.style.display = 'none';
        homescreen2.style.display = 'block';
        pageContainer2.style.display = 'none';
        document.getElementById('hourglass-mp3').pause();
    }
}