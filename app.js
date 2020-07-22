function createPiece(type) {
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    }
    if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    }
    if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    }
    if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    }
    if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    }
    if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    }
    if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function updateScore() {
    document.getElementById('score').innerText = tetris.player.score;
}

const canvas = document.getElementById('tetris');

const tetris = new Tetris(canvas);

document.addEventListener('keydown', event => {
    const { player } = tetris;
    if (event.keyCode === 37) {
        player.move(-1);
    } else if (event.keyCode === 39) {
        player.move(1);
    } else if (event.keyCode === 40) {
        player.drop();
    } else if (event.keyCode === 81) {
        player.rotate(-1);
    } else if (event.keyCode === 87) {
        player.rotate(1);
    }
});

updateScore();
