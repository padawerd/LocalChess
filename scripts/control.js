function select(scene, coordinates)
{
    resetAllColors(scene);
    const x = coordinates.x;
    const y = coordinates.y;

    const pieceToSelect = scene.pieceGrid[x][y];
    if (pieceToSelect != null &&
        isWhite(pieceToSelect) && isWhitesTurn(scene) ||
        !isWhite(pieceToSelect) && !isWhitesTurn(scene))
    {
        scene.selectedPiece = scene.pieceGrid[x][y];
        colorSelectedPiece(scene, coordinates);
    }
}

function colorSelectedPiece(scene, coordinate)
{
    scene.backgroundGrid[coordinate.x][coordinate.y].fillColor = 0x0000ff;
}


function move(scene, coordinates)
{
    const piece = scene.selectedPiece;
    const x = coordinates.x;
    const y = coordinates.y;
    console.log("possibleMoves: " + piece.possibleMoves());
    console.log("coordinates: " + x + "|" + y);
    if (contains(piece.possibleMoves(), coordinates))
    {
        const oldCoordinates = {x:piece.gridX, y:piece.gridY};
        //TODO: util class w/ is* methods?
        if (scene.pieceGrid[x][y] != null)
        {
            scene.pieceGrid[x][y].destroy();
        }
        setupPieceCoordinates(scene, x, y, piece);
        scene.pieceGrid[oldCoordinates.x][oldCoordinates.y] = null;
        const drawingCoordinates = drawingCoordinatesForPiece(x, y);
        piece.x = drawingCoordinates.x;
        piece.y = drawingCoordinates.y;
        ++scene.currentTurn;
    }
    scene.selectedPiece = null;
}

