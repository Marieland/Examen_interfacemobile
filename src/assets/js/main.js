import '../css/styles.css';



class Card{
/**
 * 
 * @param {string} name 
 * @param {string} formatLg 
 * @param {string} formatSm 
 */
    constructor(name,formatLg,formatSm) {
        this.name = name;
        this.formatLg = formatLg;
        this.formatSm = formatSm;
    }

    /**
     * @return {HTMLElement} 
     */

    tohtml(){
        const divHtml = document.createElement('div');
        const spanName = document.createElement('span');
        const spanFormatLg = document.createElement('span');
        const spanFormatSm = document.createElement('span');

        spanName.textContent = this.name;
        spanFormatLg.textContent = this.formatLg;
        spanFormatSm.textContent = this.formatSm;
        
        divHtml.className = 'bg-blue-800 rounded-md text-white w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] justify-center gap-3 items-center flex flex-col card';
        spanFormatLg.className = 'hidden lg:block';
        spanFormatSm.className = 'lg:hidden';
        
        divHtml.appendChild(spanName);
        divHtml.appendChild(spanFormatLg);
        divHtml.appendChild(spanFormatSm);

        return divHtml;
    }


}

 const gridContainer = document.getElementById('grid-container');

const cards = [
    new Card ("1", "300px/300px","200px/200px"),
    new Card ("2", "300px/300px","200px/200px"),
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


const toggleButton = document.getElementById("toggleButton");
const cardsHtml = document.querySelectorAll('.card');
const body = document.querySelector('body');

/**
 * @param {HTMLElement} body
 * @param {HTMLElement} toggleButton
 * @param {HTMLElement[]} cardsHtml
 */

toggleButton.addEventListener("click", () => {

    body.classList.toggle("bg-teal-300");
    body.classList.toggle("bg-green-800");

    toggleButton.classList.toggle("bg-pink-800");

    cardsHtml.forEach(cardHtml => {
        cardHtml.classList.toggle("bg-pink-800");
    });
});


