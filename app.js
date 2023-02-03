const cardArray = [
    {
        name:'fries',
        img:'photos/fries.png'
    },
    {
        name:'cheeseburger',
        img:'photos/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'photos/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'photos/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'photos/milkshake.png'
    },
    {
        name:'pizza',
        img:'photos/pizza.png'
    },
    {
        name:'fries',
        img:'photos/fries.png'
    },
    {
        name:'cheeseburger',
        img:'photos/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'photos/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'photos/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'photos/milkshake.png'
    },
    {
        name:'pizza',
        img:'photos/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()); //shuffling array randomly

const gridDisplay = document.getElementById('grid');
const resDisplay = document.getElementById('result'); 
let feedback = document.getElementById('feedback');
let cardChosen = [];
let cardChosenId = [];
let won = [];

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'photos/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

function checkMatch(){

    const cards = document.querySelectorAll('img');
    const optionOneId  = cardChosenId[0];
    const optionTwoId = cardChosenId[1];

    // console.log(cardChosen[0],cardChosen[1]);
    // console.log(optionOneId, optionTwoId);
    // console.log(cards[optionOneId], cards[optionTwoId]);

    if(cardChosen[0]==cardChosen[1]){
        cards[optionOneId].setAttribute('src', 'photos/white.png');
        cards[optionTwoId].setAttribute('src', 'photos/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        won.push(cardChosen);
        feedback.innerHTML = 'Well Played';
    }
    else{
        cards[optionOneId].setAttribute('src', 'photos/blank.png');
        cards[optionTwoId].setAttribute('src', 'photos/blank.png');
        feedback.innerHTML = 'Sorry! Try Again';
    }

    cardChosen = [];
    cardChosenId = [];
    resDisplay.innerHTML = won.length;

    if(won==cardArray.length/2){
        feedback.innerHTML = 'You Won !';
    }
    
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 400);
    }
}
createBoard();

const msg = document.getElementById('msg');
