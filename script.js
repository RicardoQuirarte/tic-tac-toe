const Gameboard = (() => {
    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    document.createElement
})();

const flowOfGame = (() => {
    
    
})();

const selectWinner = (() => {
    
    
})();

const renderBeeCat = (() => {
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

})();

const players = () => {

    
}