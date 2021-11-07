
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ff00ff',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('blackRook', 'assets/blackRook.png');
    this.load.image('blackKnight', 'assets/blackKnight.png');
    this.load.image('blackBishop', 'assets/blackBishop.png');
    this.load.image('blackQueen', 'assets/blackQueen.png');
    this.load.image('blackKing', 'assets/blackKing.png');
    this.load.image('blackPawn', 'assets/blackPawn.png');

    this.load.image('whiteRook', 'assets/whiteRook.png');
    this.load.image('whiteKnight', 'assets/whiteKnight.png');
    this.load.image('whiteBishop', 'assets/whiteBishop.png');
    this.load.image('whiteQueen', 'assets/whiteQueen.png');
    this.load.image('whiteKing', 'assets/whiteKing.png');
    this.load.image('whitePawn', 'assets/whitePawn.png');
    
}

function create()
{
    setupBackgroundSquares(this);
    setupPieces(this);
}

function setupBackgroundSquares(scene)
{
    const xSize = 50;
    const ySize = 50;

    scene.grid = [];

    for (let column = 0; column < 8; ++column) 
    {
        scene.grid.push([]);
        for (let row = 0; row < 8; ++row)
        {
            const coordinates = coordinatesForPiece(column, row);
            scene.grid[column].push(scene.add.rectangle(coordinates.x, coordinates.y, xSize, ySize, '#000000'));
        }
    }
    resetAllColors(scene);
}

function setupPieces(scene)
{
    setupRooks(scene);
    setupKnights(scene);
    setupBishops(scene);
    setupQueens(scene);
    setupKings(scene);
    
    for (const x in _.range(8))
    {
        const blackPawnCoordinates = coordinatesForPiece(x, 1);
        scene.add.sprite(blackPawnCoordinates.x, blackPawnCoordinates.y, 'blackPawn');
    }

    for (const x in _.range(8))
    {
        const whitePawnCoordinates = coordinatesForPiece(x, 6);
        scene.add.sprite(whitePawnCoordinates.x, whitePawnCoordinates.y, 'whitePawn');
    }
}

function setupRooks(scene)
{
    const blackRook1Coordinates = coordinatesForPiece(0, 0);
    const blackRook1 = scene.add.sprite(blackRook1Coordinates.x, blackRook1Coordinates.y, 'blackRook');
    blackRook1.gridX = 0;
    blackRook1.gridY = 0;
    blackRook1.setInteractive();
    blackRook1.on('pointerup', () => rookClickHandler(scene, blackRook1));

    const blackRook2Coordinates = coordinatesForPiece(7, 0);
    const blackRook2 = scene.add.sprite(blackRook2Coordinates.x, blackRook2Coordinates.y, 'blackRook');
    blackRook2.gridX = 7;
    blackRook2.gridY = 0;
    blackRook2.setInteractive();
    blackRook2.on('pointerup', () => rookClickHandler(scene, blackRook2));

    const whiteRook1Coordinates = coordinatesForPiece(0, 7);
    const whiteRook1 = scene.add.sprite(whiteRook1Coordinates.x, whiteRook1Coordinates.y, 'whiteRook');
    whiteRook1.gridX = 0;
    whiteRook1.gridY = 7;
    whiteRook1.setInteractive();
    whiteRook1.on('pointerup', () => rookClickHandler(scene, whiteRook1));

    const whiteRook2Coordinates = coordinatesForPiece(7, 7);
    const whiteRook2 = scene.add.sprite(whiteRook2Coordinates.x, whiteRook2Coordinates.y, 'whiteRook');
    whiteRook2.gridX = 7;
    whiteRook2.gridY = 7;
    whiteRook2.setInteractive();
    whiteRook2.on('pointerup', () => rookClickHandler(scene, whiteRook2));
}

function setupKnights(scene)
{
    const blackKnight1Coordinates = coordinatesForPiece(1, 0);
    const blackKnight1 = scene.add.sprite(blackKnight1Coordinates.x, blackKnight1Coordinates.y, 'blackKnight');
    blackKnight1.gridX = 1;
    blackKnight1.gridY = 0;
    blackKnight1.setInteractive();
    blackKnight1.on('pointerup', () => knightClickHandler(scene, blackKnight1));

    const blackKnight2Coordinates = coordinatesForPiece(6, 0);
    const blackKnight2 = scene.add.sprite(blackKnight2Coordinates.x, blackKnight2Coordinates.y, 'blackKnight');
    blackKnight2.gridX = 6;
    blackKnight2.gridY = 0;
    blackKnight2.setInteractive();
    blackKnight2.on('pointerup', () => knightClickHandler(scene, blackKnight2));

    const whiteKnight1Coordinates = coordinatesForPiece(1, 7);
    const whiteKnight1 = scene.add.sprite(whiteKnight1Coordinates.x, whiteKnight1Coordinates.y, 'whiteKnight');
    whiteKnight1.gridX = 1;
    whiteKnight1.gridY = 7;
    whiteKnight1.setInteractive();
    whiteKnight1.on('pointerup', () => knightClickHandler(scene, whiteKnight1));

    const whiteKnight2Coordinates = coordinatesForPiece(6, 7);
    const whiteKnight2 = scene.add.sprite(whiteKnight2Coordinates.x, whiteKnight2Coordinates.y, 'whiteKnight');
    whiteKnight2.gridX = 6;
    whiteKnight2.gridY = 7;
    whiteKnight2.setInteractive();
    whiteKnight2.on('pointerup', () => knightClickHandler(scene, whiteKnight2));
}

function setupBishops(scene)
{
    const blackBishop1Coordinates = coordinatesForPiece(2, 0);
    const blackBishop1 = scene.add.sprite(blackBishop1Coordinates.x, blackBishop1Coordinates.y, 'blackBishop');
    blackBishop1.gridX = 2;
    blackBishop1.gridY = 0;
    blackBishop1.setInteractive();
    blackBishop1.on('pointerup', () => bishopClickHandler(scene, blackBishop1));

    const blackBishop2Coordinates = coordinatesForPiece(5, 0);
    const blackBishop2 = scene.add.sprite(blackBishop2Coordinates.x, blackBishop2Coordinates.y, 'blackBishop');
    blackBishop2.gridX = 5;
    blackBishop2.gridY = 0;
    blackBishop2.setInteractive();
    blackBishop2.on('pointerup', () => bishopClickHandler(scene, blackBishop2));

    const whiteBishop1Coordinates = coordinatesForPiece(2, 7);
    const whiteBishop1 = scene.add.sprite(whiteBishop1Coordinates.x, whiteBishop1Coordinates.y, 'whiteBishop');
    whiteBishop1.gridX = 2;
    whiteBishop1.gridY = 7;
    whiteBishop1.setInteractive();
    whiteBishop1.on('pointerup', () => bishopClickHandler(scene, whiteBishop1));

    const whiteBishop2Coordinates = coordinatesForPiece(5, 7);
    const whiteBishop2 = scene.add.sprite(whiteBishop2Coordinates.x, whiteBishop2Coordinates.y, 'whiteBishop');
    whiteBishop2.gridX = 5;
    whiteBishop2.gridY = 7;
    whiteBishop2.setInteractive();
    whiteBishop2.on('pointerup', () => bishopClickHandler(scene, whiteBishop2));
}

function setupQueens(scene)
{
    const blackQueenCoordinates = coordinatesForPiece(3, 0);
    const blackQueen = scene.add.sprite(blackQueenCoordinates.x, blackQueenCoordinates.y, 'blackQueen');
    blackQueen.gridX = 3;
    blackQueen.gridY = 0;
    blackQueen.setInteractive();
    blackQueen.on('pointerup', () => queenClickHandler(scene, blackQueen));

    const whiteQueenCoordinates = coordinatesForPiece(3, 7);
    const whiteQueen = scene.add.sprite(whiteQueenCoordinates.x, whiteQueenCoordinates.y, 'whiteQueen');
    whiteQueen.gridX = 3;
    whiteQueen.gridY = 7;
    whiteQueen.setInteractive();
    whiteQueen.on('pointerup', () => queenClickHandler(scene, whiteQueen));
}

function setupKings(scene)
{
    const blackKingCoordinates = coordinatesForPiece(4, 0);
    const blackKing = scene.add.sprite(blackKingCoordinates.x, blackKingCoordinates.y, 'blackKing');
    blackKing.gridX = 4;
    blackKing.gridY = 0;
    blackKing.setInteractive();
    blackKing.on('pointerup', () => kingClickHandler(scene, blackKing));

    const whiteKingCoordinates = coordinatesForPiece(4, 7);
    const whiteKing = scene.add.sprite(whiteKingCoordinates.x, whiteKingCoordinates.y, 'whiteKing');
    whiteKing.gridX = 4;
    whiteKing.gridY = 7;
    whiteKing.setInteractive();
    whiteKing.on('pointerup', () => kingClickHandler(scene, whiteKing));
}

function coordinatesForPiece(x, y)
{
    const xOffset = 50;
    const yOffset = 50;
    const xSpacing = 50;
    const ySpacing = 50;
    
    return {x: xOffset + xSpacing * x, 
            y: yOffset + ySpacing * y};
}
