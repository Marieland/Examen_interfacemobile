import '../css/styles.css';



class Card{
/**
 * 
 * @param {string} name 
 * @param {string} formatLg 
 * @param {string} formatSm 
 */
    constructor(name,formatLg,formatSm,couleur) {
        this.name = name;
        this.formatLg = formatLg;
        this.formatSm = formatSm;
        this.couleur = couleur;
    }

    /**
     * @return {HTMLElement} 
     */

    tohtml(){
        const divHtml = document.createElement('div');
        const spanName = document.createElement('span');
        const spanFormatLg = document.createElement('span');
        const spanFormatSm = document.createElement('span');
        const spanCouleur = document.createElement('span');

        spanName.textContent = this.name;
        spanFormatLg.textContent = this.formatLg;
        spanFormatSm.textContent = this.formatSm;
        spanCouleur.textContent = this.couleur;
        
        divHtml.className = 'bg-blue-800 rounded-md text-white w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] justify-center gap-3 items-center flex flex-col card';
        spanFormatLg.className = 'hidden lg:block';
        spanFormatSm.className = 'lg:hidden';
        
        divHtml.appendChild(spanName);
        divHtml.appendChild(spanFormatLg);
        divHtml.appendChild(spanFormatSm);
        divHtml.appendChild(spanCouleur);

        return divHtml;
    }


}

 const gridContainer = document.getElementById('grid-container');

 // J'aurais aime que tu type cette variable.
 /** @type {Card[]} */
const cards = [
    new Card ("1", "300px/300px","200px/200px","rouge"),
    new Card ("2", "300px/300px","200px/200px","bleu"),
    new Card ("3", "300px/300px","200px/200px"),
    new Card ("4", "300px/300px","200px/200px"), 
    new Card ("5", "300px/300px","200px/200px"),
    new Card ("6", "300px/300px","200px/200px"),
    new Card ("7", "300px/300px","200px/200px"),
    new Card ("8", "300px/300px","200px/200px"),
    new Card ("9", "300px/300px","200px/200px"),
];

cards.forEach(card =>{
    gridContainer.appendChild(card.tohtml());   
});

// JSdoc devrait etre -0.25

/** @type {HTMLElement}*/
const toggleButton = document.getElementById("toggleButton");
/** @type {HTMLElement[]}*/
const cardsHtml = document.querySelectorAll('.card');
/** @type {HTMLElement}*/
const body = document.querySelector('body');


toggleButton.addEventListener("click", () => {

    body.classList.toggle("bg-teal-300");
    body.classList.toggle("bg-green-800");

    toggleButton.classList.toggle("bg-pink-800");

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle("bg-pink-800");
    });
});


const hide_btn = document.getElementById("hide_btn");


hide_btn.addEventListener("click", () => {

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle("hidden");
    });
});



