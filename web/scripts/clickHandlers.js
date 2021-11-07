function squareClickHandler(scene, coordinates)
{
    resetAllColors(scene);
    if (scene.selectedPiece != null)
    {
        move(scene, coordinates);
    } else {
        select(scene, coordinates);
    }
}

function rookClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
    possibleRookMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function knightClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
    possibleKnightMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
    
}

function bishopClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
    possibleBishopMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function queenClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
    possibleQueenMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function kingClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
    possibleKingMoves(scene, target)
        .forEach((possibleMove) => colorPossibleMove(scene, possibleMove));
}

function pawnClickHandler(scene, target)
{
    resetAllColors(scene);
    select(scene, target);
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
