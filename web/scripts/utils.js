

function isWhite(piece)
{
    return piece.texture.key.includes("white");
}

function isValidCoordinate(coordinate)
{
    return coordinate.x >= 0 &&
           coordinate.x < 8 &&
           coordinate.y >= 0 &&
           coordinate.y < 8;
}

function isVacantOrEnemy(scene, piece, newCoordinate)
{
    return isVacant(scene, newCoordinate) ||
        isEnemy(scene, piece, newCoordinate);
}

function isValidAndVacant(scene, newCoordinate)
{
    return isValidCoordinate(newCoordinate) && isVacant(scene, newCoordinate);
}

function isVacant(scene, newCoordinate)
{
    return scene.pieceGrid[newCoordinate.x][newCoordinate.y] == null;
}

function isValidAndVacantOrEnemy(scene, piece, newCoordinate)
{
    return isValidCoordinate(newCoordinate) && isVacantOrEnemy(scene, piece, newCoordinate);
}

function isValidAndOccupiedAndEnemy(scene, piece, newCoordinate)
{
    return isValidCoordinate(newCoordinate) && isOccupiedAndEnemy(scene, piece, newCoordinate);
}

function isOccupiedAndEnemy(scene, piece, newCoordinate)
{
    return scene.pieceGrid[newCoordinate.x][newCoordinate.y] != null && 
        isEnemy(scene, piece, newCoordinate);
}

function isEnemy(scene, piece, newCoordinate)
{
    return isWhite(scene.pieceGrid[newCoordinate.x][newCoordinate.y]) != isWhite(piece);
}

function filterPossibleMoves(scene, piece, candidateMoveCoordinates)
{
    return _.filter(candidateMoveCoordinates, possibleMove => isValidAndVacantOrEnemy(scene, piece, possibleMove));
}

function contains(possibleMoves, candidateMove)
{
    possibleMoves.forEach(m => console.log("x:"+m.x+"y:"+m.y));
    const filtered = _.filter(possibleMoves, (move) => move.x == candidateMove.x && move.y == candidateMove.y);
    return filtered.length > 0;
}

function setupPieceCoordinates(scene, x, y, piece)
{
    setupCoordinates(x, y, piece);
    scene.pieceGrid[x][y] = piece;
}

function setupCoordinates(x, y, target)
{
    target.gridX = x;
    target.gridY = y;
}

function drawingCoordinatesForPiece(x, y)
{
    const xOffset = 50;
    const yOffset = 50;
    const xSpacing = 50;
    const ySpacing = 50;
    
    return {x: xOffset + xSpacing * x, 
            y: yOffset + ySpacing * y};
}
