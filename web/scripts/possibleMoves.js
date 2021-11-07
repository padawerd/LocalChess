function possibleRookMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;
    let possibleRookMoves = [];
    // positive x
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX + delta, y: currentY}); ++delta)
    {
        possibleRookMoves.push({x: currentX + delta, y: currentY});
    } 

    // negative x
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX - delta, y: currentY}); ++delta)
    {
        possibleRookMoves.push({x: currentX - delta, y: currentY});
    } 

    // positive y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX, y: currentY + delta}); ++delta)
    {
        possibleRookMoves.push({x: currentX, y: currentY + delta});
    } 

    // negative y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX, y: currentY - delta}); ++delta)
    {
        possibleRookMoves.push({x: currentX, y: currentY - delta});
    } 
    return filterPossibleMoves(scene, piece, possibleRookMoves);
}

function possibleKnightMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;
    deltas = [{x: 1, y: 2},
              {x: 1, y: -2},
              {x: -1, y: 2},
              {x: -1, y: -2},
              {x: 2, y: 1},
              {x: 2, y: -1},
              {x: -2, y: 1},
              {x: -2, y: -1}];

    let possibleKnightMoves = _.map(deltas, delta => {return {x: delta.x + currentX, y: delta.y + currentY};});
    possibleKnightMoves = _.filter(possibleKnightMoves, possibleMove => isValidCoordinate(possibleMove));
    return filterPossibleMoves(scene, piece, possibleKnightMoves);
}

function possibleBishopMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;

    let possibleBishopMoves = [];
    // positive x positive y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX + delta, y: currentY + delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX + delta, y: currentY + delta});
    } 

    // positive x negative y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX + delta, y: currentY - delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX + delta, y: currentY - delta});
    } 

    // negative x positive y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX - delta, y: currentY + delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX - delta, y: currentY + delta});
    } 

    // negative x negative y
    for (let delta = 1; isValidAndVacantOrEnemy(scene, piece, {x: currentX - delta, y: currentY - delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX - delta, y: currentY - delta});
    } 
    return filterPossibleMoves(scene, piece, possibleBishopMoves);
}

function possibleQueenMoves(scene, piece)
{
    return possibleBishopMoves(scene, piece).concat(possibleRookMoves(scene, piece));
}

function possibleKingMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;
    deltas = [{x: 1, y: 0},
        {x: 1, y: 1},
        {x: 0, y: 1},
        {x: -1, y: 1},
        {x: -1, y: 0},
        {x: -1, y: -1},
        {x: 0, y: -1},
        {x: 1, y: -1}];

    let possibleKingMoves = _.map(deltas, delta => {return {x: delta.x + currentX, y: delta.y + currentY};});
    return filterPossibleMoves(scene, piece, possibleKingMoves);
}

function possiblePawnMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;

    const hasMoved = isWhite ? currentY == 1 : currentY == 6; 

    let possiblePawnMoves = [];
    const oneMove = isWhite(piece) ? -1 : 1;
    possiblePawnMoves.push({x: currentX, y: currentY + oneMove});
    if (!hasMoved && isValidAndVacantOrEnemy(scene, piece, possiblePawnMoves[0]))
    {
        possiblePawnMoves.push({x: currentX, y: currentY + (oneMove * 2)});
    }

    return filterPossibleMoves(scene, piece, possiblePawnMoves);
}

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
    return scene.pieceGrid[newCoordinate.x][newCoordinate.y] == null ||
        isWhite(scene.pieceGrid[newCoordinate.x][newCoordinate.y]) != isWhite(piece);
}

function isValidAndVacantOrEnemy(scene, piece, newCoordinate)
{
    return isValidCoordinate(newCoordinate) && isVacantOrEnemy(scene, piece, newCoordinate);
}

function filterPossibleMoves(scene, piece, candidateMoveCoordinates)
{
    return _.filter(candidateMoveCoordinates, possibleMove => isValidAndVacantOrEnemy(scene, piece, possibleMove));
}
