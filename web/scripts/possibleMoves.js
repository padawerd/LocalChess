function possibleRookMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;
    let possibleRookMoves = [];
    // positive x
    for (let delta = 0; isValidCoordinate({x: currentX + delta, y: currentY}); ++delta)
    {
        possibleRookMoves.push({x: currentX + delta, y: currentY});
    } 

    // negative x
    for (let delta = 0; isValidCoordinate({x: currentX - delta, y: currentY}); ++delta)
    {
        possibleRookMoves.push({x: currentX - delta, y: currentY});
    } 

    // positive y
    for (let delta = 0; isValidCoordinate({x: currentX, y: currentY + delta}); ++delta)
    {
        possibleRookMoves.push({x: currentX, y: currentY + delta});
    } 

    // negative y
    for (let delta = 0; isValidCoordinate({x: currentX, y: currentY - delta}); ++delta)
    {
        possibleRookMoves.push({x: currentX, y: currentY - delta});
    } 
    return possibleRookMoves;
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
    return possibleKnightMoves;
}

function possibleBishopMoves(scene, piece)
{
    const currentX = piece.gridX;
    const currentY = piece.gridY;

    let possibleBishopMoves = [];
    // positive x positive y
    for (let delta = 0; isValidCoordinate({x: currentX + delta, y: currentY + delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX + delta, y: currentY + delta});
    } 

    // positive x negative y
    for (let delta = 0; isValidCoordinate({x: currentX + delta, y: currentY - delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX + delta, y: currentY - delta});
    } 

    // negative x positive y
    for (let delta = 0; isValidCoordinate({x: currentX - delta, y: currentY + delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX - delta, y: currentY + delta});
    } 

    // negative x negative y
    for (let delta = 0; isValidCoordinate({x: currentX - delta, y: currentY - delta}); ++delta)
    {
        possibleBishopMoves.push({x: currentX - delta, y: currentY - delta});
    } 
    return possibleBishopMoves;
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
    possibleKingMoves = _.filter(possibleKingMoves, possibleMove => isValidCoordinate(possibleMove));
    return possibleKingMoves;
}

function isValidCoordinate(coordinate)
{
    return coordinate.x >= 0 &&
           coordinate.x < 8 &&
           coordinate.y >= 0 &&
           coordinate.y < 8;
}
