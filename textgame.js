const textElement = document.getElementById('text');  // text Node display 1
const textElement2 = document.getElementById('text2');  // text Node display 2
const textElement3 = document.getElementById('text3');  // text Node display 2
const textElement4 = document.getElementById('text4');  // text Node display 2
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};  // A state variable of an empty object, used to keep track of the story and certain selected events

function startGame() {  // Starts the game on page load, setting the state at the beginning
    state = {};
    showTextNode(1);  // shows the first textNode of the game. Info is stored in the textNodes variable of objects
}

function startGame2() {
    const loadingScreen = document.getElementById('loading-screen');
    const homescreen = document.getElementById('homescreen');
    const pageContainer = document.getElementById('page-container');

    loadingScreen.style.display = 'none';
    homescreen.style.display = 'none';
    pageContainer.style.display = 'block';

    document.getElementById('hourglass-mp3').play()

    startGame();
}

function showTextNode(textNodeIndex) {  // Displays whichever option we're on; takes a particular textnode index
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);  // getting textNode with our current ID
     // using .find to return the element in array that matches the testing function
    
    textElement.innerText = textNode.text;  // to show the current textNode
    textElement2.innerText = textNode.text2;
    textElement3.innerText = textNode.text3;
    textElement4.innerText = textNode.text4;

    while (optionButtonsElement.firstChild) {  // this REMOVES the sample option buttons (4) that are written in HTML
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {  // looping thru each option of the array with .forEach
        if (showOption(option)) {  // if we can show the option (based on its STATE), then we execute this code
            const button = document.createElement('button');  // creating a button to replace the removed samples
            button.innerText = option.text;  // button's text will be the option's .text in the options objects
            button.classList.add('btn');  // adds a class to button so it has the same style in CSS
            button.addEventListener('click', () => selectOption(option));  // enables us to call the selectOption function when each button is clicked
            optionButtonsElement.appendChild(button);  // adding the buttons to the HTML #option-buttons
        }
    })
}

function showOption(option) {  // 
    return option.requiredState == null || option.requiredState(state); // if there's no required state (null), or if we have the state,
    // then the option is shown
}

function selectOption(option) {  // Runs every time we select an option; takes whichever option we select
    const nextTextNodeId = option.nextText;  // next textNode is equal to the option object's .nextText
    if(nextTextNodeId <= 0) {  // if statement with a nextText id of <= 0 to RESTART the game
        return startGame();
    }
    state = Object.assign(state, option.setState);  // .assign will copy the option.setState to the current state, changing the state
    showTextNode(nextTextNodeId);  // showing the textNode for the nextText ID
}

const textNodes = [  // stores objects of different textNodes in the game
    {
        id: 1,
        text: '"Forward!" shouts a pirate. You step to the edge of the plank, the wood groaning under you. There\'s nothing below you but clouds and a screeching sparrow. One more step and you\'ll be one of the Fallen.',
        text2: '"Forward!" shouts a pirate. You step to the edge of the plank, the wood groaning under you. There\'s nothing below you but clouds',
        text3: '"Forward!" shouts a pirate. You step to the edge of the plank, the wood groaning under you. There\'s nothing below you but clouds',
        text4: '"Forward!" shouts a pirate. You step to the edge of the plank, the wood groaning under you. There\'s nothing below you but clouds"Forward!" shouts a pirate. You step to the edge of the plank, the wood groaning under you. There\'s nothing below you but clouds',
        options: [  // button options to pick from in this textNode
            {
                text: 'Plead your case to the pirates.',  // text in the option button
                setState: {plead: true},  // sets a state to keep track of
                nextText: 2  // if this option is clicked, we're sent to textNode ID #2
            },
            {
                text: 'Try to grab a pirate\'s sword.',
                setState: {grabSword: true},
                nextText: 3
            },
            {
                text: 'Give up and jump.',
                setState: {jumpToDeath: true},
                nextText: 99
            },
            {
                text: 'Give up and jump.',
                setState: {jumpToDeath: true},
                nextText: 99
            }
        ]  
    },
    {
        id: 2,
        text: '"Please, Captain. I didn\'t do anything wrong. I swear it!"',
        text2: '"Tell that to the gods on the Floor!" the captain says as he pushes you off.',
        options: [
            {
                text: 'Scream',
                requiredState: (currentState) => currentState.plead,  // if we have the currentState, then this option is shown
                setState: {plead: false, pushed: true},  // sets a new state based off the choice
                nextText: 3
            },
            {
                text: 'Cry',
                requiredState: (currentState) => currentState.plead,
                setState: {plead: false, pushed: true},
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'You fall to the Floor, but a god catches you in his arms.',
        text2: '',
        options: [
            {
                text: 'Thank the god.',
                requiredState: (currentState) => currentState.pushed,
                setState: {pushed: false, caughtByGod: true},
                nextText: 5
            },
            {
                text: 'Grab an oar and row for your life',
                requiredState: (currentState) => currentState.boatSeesYou,
                setState: {boatSeesYou: false, rowing: true},
                nextText: 4
            }
         ]
    },
    {
        id: 99,
        text: 'You are killed.',
        text2: '',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]
