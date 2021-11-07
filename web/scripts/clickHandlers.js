function rookClickHandler(scene, target)
{
    resetAllColors(scene);
    possibleRookMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function knightClickHandler(scene, target)
{
    resetAllColors(scene);
    possibleKnightMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
    
}

function bishopClickHandler(scene, target)
{
    resetAllColors(scene);
    possibleBishopMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function queenClickHandler(scene, target)
{
    resetAllColors(scene);
    possibleQueenMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function kingClickHandler(scene, target)
{
    resetAllColors(scene);
    possibleKingMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function pawnClickHandler(scene, target)
{
    resetAllColors(scene);
    possiblePawnMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function colorPossibleMove(scene, coordinate)
{
    scene.backgroundGrid[coordinate.x][coordinate.y].fillColor = 0xff0000;
}

function resetAllColors(scene)
{
    for (let column = 0; column < 8; ++column)
    {
        for (let row = 0; row < 8; ++row)
        {
            scene.backgroundGrid[column][row].fillColor = (((row + column) % 2) == 0) ? 0xffffff : 0x000000;
        }
    }
}
