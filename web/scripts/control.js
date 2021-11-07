function select(scene, coordinates)
{
    resetAllColors(scene);
    const x = coordinates.x;
    const y = coordinates.y;
    scene.selectedPiece = scene.pieceGrid[x][y];
    if (scene.selectedPiece != null)
    {
        colorSelectedPiece(scene, coordinates);
    }
}

function colorSelectedPiece(scene, coordinate)
{
    scene.backgroundGrid[coordinate.x][coordinate.y].fillColor = 0x00ff00;
}


function move(scene, coordinates)
{
    const piece = scene.selectedPiece;
    const x = coordinates.x;
    const y = coordinates.y;
    console.log("possibleMoves: " + piece.possibleMoves());
    console.log("coordinates: " + coordinates);
    if (contains(piece.possibleMoves(), coordinates))
    {
        //TODO: util class w/ is* methods?
        if (scene.pieceGrid[x][y] != null)
        {
            scene.pieceGrid[x][y].destroy();
        }
        setupPieceCoordinates(scene, x, y, piece);
        const drawingCoordinates = coordinatesForPiece(x, y);
        piece.x = drawingCoordinates.x;
        piece.y = drawingCoordinates.y;
    }
    scene.selectedPiece = null;
}

