const tosLogo = document.getElementById('tos-logo');

const pageContainer = document.getElementById('page-container');
const homescreen = document.getElementById('homescreen');
const loadingScreen = document.getElementById('loading-screen');

function loadingScreenFunc() {
    pageContainer.style.display = 'none';
    homescreen.style.display = 'none';


    setTimeout(function () {
        loadingScreen.style.display = 'none';
        homescreen.style.display = 'block';
    }, 2000);
}
