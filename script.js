const gameboard = (() => {
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const container = document.querySelector('.game-board');

    for(let i = 0; i <= 8; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("id", i)
        newDiv.classList.add('squares');
        container.appendChild(newDiv);
    }

    const restart = document.querySelector("h1");

    restart.addEventListener("click", () => {
        window.location.reload();
    });
    
})();

const flowOfGame = (() => {
    
    
})();

const selectWinner = (() => {
    
    
})();

const renderBeesCats = (() => {
    const squares = document.querySelectorAll('.squares');

    squares.forEach ((e) => {
        e.addEventListener('click', renderContent)
    });

    let counter = 0

    function renderContent(e) {
        if (e.target.classList.contains('bee') || e.target.classList.contains('cat')) {
            return
        }else if (counter % 2 == 0) {
            e.target.classList.add('bee');
        } else {
            e.target.classList.add('cat');
        }
        counter++
        }

    
    const squareOne = document.getElementById(0);
    const squareTwo = document.getElementById(1);
    const squareThree = document.getElementById(2);
    const squareFour = document.getElementById(3);
    const squareFive = document.getElementById(4);
    const squareSix = document.getElementById(5);
    const squareSeven = document.getElementById(6);
    const squareEight = document.getElementById(7);
    const squareNine = document.getElementById(8);
    const congratulate = document.querySelector(".congratulate");
    const nameInput = document.querySelector("#playerOne");
    const nameInputTwo = document.querySelector("#playerTwo");

    function congratulateBess() {
        congratulate.textContent = `${nameInput.value}` + " win!! May all cats die!";
    }

    function congratulateCats() {
        congratulate.textContent = `${nameInputTwo.value}` + " win!! Die to the bees!";
    }

    function gameOver() {
        if (squareOne.classList.contains('bee') && squareTwo.classList.contains('bee') && squareThree.classList.contains('bee')) {
        congratulateBess()
    } else if (squareFour.classList.contains('bee') && squareFive.classList.contains('bee') && squareSix.classList.contains('bee')) {
        congratulateBess()
    } else if (squareSeven.classList.contains('bee') && squareEight.classList.contains('bee') && squareNine.classList.contains('bee')) {
        congratulateBess()
    } else if (squareOne.classList.contains('bee') && squareFour.classList.contains('bee') && squareSeven.classList.contains('bee')) {
        congratulateBess()
    } else if (squareTwo.classList.contains('bee') && squareFive.classList.contains('bee') && squareEight.classList.contains('bee')) {
        congratulateBess()
    } else if (squareThree.classList.contains('bee') && squareSix.classList.contains('bee') && squareNine.classList.contains('bee')) {
        congratulateBess()
    } else if (squareOne.classList.contains('bee') && squareFive.classList.contains('bee') && squareNine.classList.contains('bee')) {
        congratulateBess()
    } else if (squareThree.classList.contains('bee') && squareFive.classList.contains('bee') && squareSeven.classList.contains('bee')) {
        congratulateBess()

    } else if (squareOne.classList.contains('cat') && squareTwo.classList.contains('cat') && squareThree.classList.contains('cat')) {
        congratulateCats()
    } else if (squareFour.classList.contains('cat') && squareFive.classList.contains('cat') && squareSix.classList.contains('cat')) {
        congratulateCats()
    } else if (squareSeven.classList.contains('cat') && squareEight.classList.contains('cat') && squareNine.classList.contains('cat')) {
        congratulateCats()
    } else if (squareOne.classList.contains('cat') && squareFour.classList.contains('cat') && squareSeven.classList.contains('cat')) {
        congratulateCats()
    } else if (squareTwo.classList.contains('cat') && squareFive.classList.contains('cat') && squareEight.classList.contains('cat')) {
        congratulateCats()
    } else if (squareThree.classList.contains('cat') && squareSix.classList.contains('cat') && squareNine.classList.contains('cat')) {
        congratulateCats()
    } else if (squareOne.classList.contains('cat') && squareFive.classList.contains('cat') && squareNine.classList.contains('cat')) {
        congratulateCats()
    } else if (squareThree.classList.contains('cat') && squareFive.classList.contains('cat') && squareSeven.classList.contains('cat')) {
        congratulateCats()
    }}

    window.addEventListener("click", gameOver)

})();

const players = () => {

    
}