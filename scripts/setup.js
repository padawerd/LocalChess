
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
    setupGameModel(this);
    setupPieces(this);
}

function setupBackgroundSquares(scene)
{
    const xSize = 50;
    const ySize = 50;

    scene.backgroundGrid = [];

    for (let column = 0; column < 8; ++column) 
    {
        scene.backgroundGrid.push([]);
        for (let row = 0; row < 8; ++row)
        {
            const coordinates = drawingCoordinatesForPiece(column, row);
            const square = scene.add.rectangle(coordinates.x, coordinates.y, xSize, ySize, '#000000');
            scene.backgroundGrid[column].push(square);
            setupCoordinates(column, row, square);
            square.setInteractive();
            square.on('pointerup', () => squareClickHandler(scene, {x: column, y: row}));
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
    setupPawns(scene);
}

function setupGameModel(scene)
{
    scene.pieceGrid = [];
    for (let column = 0; column < 8; ++column)
    {
        scene.pieceGrid.push(new Array(8).fill(null));
    }
    scene.currentTurn = 0;
}

function setupRooks(scene)
{
    const blackRook1Coordinates = drawingCoordinatesForPiece(0, 0);
    const blackRook1 = scene.add.sprite(blackRook1Coordinates.x, blackRook1Coordinates.y, 'blackRook');
    setupPieceCoordinates(scene, 0, 0, blackRook1);
    blackRook1.possibleMoves = () => possibleRookMoves(scene, blackRook1);

    const blackRook2Coordinates = drawingCoordinatesForPiece(7, 0);
    const blackRook2 = scene.add.sprite(blackRook2Coordinates.x, blackRook2Coordinates.y, 'blackRook');
    setupPieceCoordinates(scene, 7, 0, blackRook2);
    blackRook2.possibleMoves = () => possibleRookMoves(scene, blackRook2);

    const whiteRook1Coordinates = drawingCoordinatesForPiece(0, 7);
    const whiteRook1 = scene.add.sprite(whiteRook1Coordinates.x, whiteRook1Coordinates.y, 'whiteRook');
    setupPieceCoordinates(scene, 0, 7, whiteRook1);
    whiteRook1.possibleMoves = () => possibleRookMoves(scene, whiteRook1);

    const whiteRook2Coordinates = drawingCoordinatesForPiece(7, 7);
    const whiteRook2 = scene.add.sprite(whiteRook2Coordinates.x, whiteRook2Coordinates.y, 'whiteRook');
    setupPieceCoordinates(scene, 7, 7, whiteRook2);
    whiteRook2.possibleMoves = () => possibleRookMoves(scene, whiteRook2);
}

function setupKnights(scene)
{
    const blackKnight1Coordinates = drawingCoordinatesForPiece(1, 0);
    const blackKnight1 = scene.add.sprite(blackKnight1Coordinates.x, blackKnight1Coordinates.y, 'blackKnight');
    setupPieceCoordinates(scene, 1, 0, blackKnight1);
    blackKnight1.possibleMoves = () => possibleKnightMoves(scene, blackKnight1);
    
    const blackKnight2Coordinates = drawingCoordinatesForPiece(6, 0);
    const blackKnight2 = scene.add.sprite(blackKnight2Coordinates.x, blackKnight2Coordinates.y, 'blackKnight');
    setupPieceCoordinates(scene, 6, 0, blackKnight2);
    blackKnight2.possibleMoves = () => possibleKnightMoves(scene, blackKnight2);

    const whiteKnight1Coordinates = drawingCoordinatesForPiece(1, 7);
    const whiteKnight1 = scene.add.sprite(whiteKnight1Coordinates.x, whiteKnight1Coordinates.y, 'whiteKnight');
    setupPieceCoordinates(scene, 1, 7, whiteKnight1);
    whiteKnight1.possibleMoves = () => possibleKnightMoves(scene, whiteKnight1);

    const whiteKnight2Coordinates = drawingCoordinatesForPiece(6, 7);
    const whiteKnight2 = scene.add.sprite(whiteKnight2Coordinates.x, whiteKnight2Coordinates.y, 'whiteKnight');
    setupPieceCoordinates(scene, 6, 7, whiteKnight2);
    whiteKnight2.possibleMoves = () => possibleKnightMoves(scene, whiteKnight2);
}

function setupBishops(scene)
{
    const blackBishop1Coordinates = drawingCoordinatesForPiece(2, 0);
    const blackBishop1 = scene.add.sprite(blackBishop1Coordinates.x, blackBishop1Coordinates.y, 'blackBishop');
    setupPieceCoordinates(scene, 2, 0, blackBishop1);
    blackBishop1.possibleMoves = () => possibleBishopMoves(scene, blackBishop1);

    const blackBishop2Coordinates = drawingCoordinatesForPiece(5, 0);
    const blackBishop2 = scene.add.sprite(blackBishop2Coordinates.x, blackBishop2Coordinates.y, 'blackBishop');
    setupPieceCoordinates(scene, 5, 0, blackBishop2);
    blackBishop2.possibleMoves = () => possibleBishopMoves(scene, blackBishop2);

    const whiteBishop1Coordinates = drawingCoordinatesForPiece(2, 7);
    const whiteBishop1 = scene.add.sprite(whiteBishop1Coordinates.x, whiteBishop1Coordinates.y, 'whiteBishop');
    setupPieceCoordinates(scene, 2, 7, whiteBishop1);
    whiteBishop1.possibleMoves = () => possibleBishopMoves(scene, whiteBishop1);

    const whiteBishop2Coordinates = drawingCoordinatesForPiece(5, 7);
    const whiteBishop2 = scene.add.sprite(whiteBishop2Coordinates.x, whiteBishop2Coordinates.y, 'whiteBishop');
    setupPieceCoordinates(scene, 5, 7, whiteBishop2);
    whiteBishop2.possibleMoves = () => possibleBishopMoves(scene, whiteBishop2);
}

function setupQueens(scene)
{
    const blackQueenCoordinates = drawingCoordinatesForPiece(3, 0);
    const blackQueen = scene.add.sprite(blackQueenCoordinates.x, blackQueenCoordinates.y, 'blackQueen');
    setupPieceCoordinates(scene, 3, 0, blackQueen);
    blackQueen.possibleMoves = () => possibleQueenMoves(scene, blackQueen);

    const whiteQueenCoordinates = drawingCoordinatesForPiece(3, 7);
    const whiteQueen = scene.add.sprite(whiteQueenCoordinates.x, whiteQueenCoordinates.y, 'whiteQueen');
    setupPieceCoordinates(scene, 3, 7, whiteQueen);
    whiteQueen.possibleMoves = () => possibleQueenMoves(scene, whiteQueen);
}

function setupKings(scene)
{
    const blackKingCoordinates = drawingCoordinatesForPiece(4, 0);
    const blackKing = scene.add.sprite(blackKingCoordinates.x, blackKingCoordinates.y, 'blackKing');
    setupPieceCoordinates(scene, 4, 0, blackKing);
    blackKing.possibleMoves = () => possibleKingMoves(scene, blackKing);

    const whiteKingCoordinates = drawingCoordinatesForPiece(4, 7);
    const whiteKing = scene.add.sprite(whiteKingCoordinates.x, whiteKingCoordinates.y, 'whiteKing');
    setupPieceCoordinates(scene, 4, 7, whiteKing);
    whiteKing.possibleMoves = () => possibleKingMoves(scene, whiteKing);
}

function setupPawns(scene)
{
    for (let x = 0; x < 8; ++x)
    {
        const blackPawnCoordinates = drawingCoordinatesForPiece(x, 1);
        const blackPawn = scene.add.sprite(blackPawnCoordinates.x, blackPawnCoordinates.y, 'blackPawn');
        setupPieceCoordinates(scene, x, 1, blackPawn);
        blackPawn.possibleMoves = () => possiblePawnMoves(scene, blackPawn);
    }

    for (let x = 0; x < 8; ++x)
    {
        const whitePawnCoordinates = drawingCoordinatesForPiece(x, 6);
        const whitePawn = scene.add.sprite(whitePawnCoordinates.x, whitePawnCoordinates.y, 'whitePawn');
        setupPieceCoordinates(scene, x, 6, whitePawn);
        whitePawn.possibleMoves = () => possiblePawnMoves(scene, whitePawn);
    }
}
