function Node(pos, path) {
    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
      return null;
    }
    return { pos, path };
  }
  
  function knightMoves([x, y], [a, b]) {
    let q = [Node([x, y], [[x, y]])];
    let visited = new Set(); // Track visited positions
    visited.add(`${x},${y}`);

    while (q.length > 0) {
        let currentNode = q.shift();

        if (currentNode.pos[0] === a && currentNode.pos[1] === b) {
            console.log(`=> You made it in ${currentNode.path.length - 1} moves! Here's your path:`);
            currentNode.path.forEach((pos) => console.log(pos));
            return;
        }

        let moves = [
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
        ];

        moves.forEach((move) => {
            let key = `${move[0]},${move[1]}`;
            if (!visited.has(key) && move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8) {
                visited.add(key);
                q.push(Node(move, currentNode.path.concat([move])));
            }
        });
    }
  }

  knightMoves([3, 3], [7, 1]);