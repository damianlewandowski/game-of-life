// Check for alive neighbours. If alive return 1 else 0

export function checkLeft(row, col, arr) {
  if(arr[row][col - 1] && arr[row][col - 1]) {
    return 1;
  }
  return 0;
}

export function checkRight(row, col, arr) {
  if(arr[row][col + 1] && arr[row][col + 1]) {
    return 1;
  }
  return 0;
}

export function checkTop(row, col, arr) {
  if(arr[row - 1] && arr[row - 1][col]) {
    return 1;
  }
  return 0;
}

export function checkBottom(row, col, arr) {
  if(arr[row + 1] && arr[row + 1][col]) {
    return 1;
  }
  return 0;
}

export function checkLeftTop(row, col, arr) {
  if(arr[row - 1] && arr[row - 1][col - 1]) {
    return 1;
  }
  return 0;
}

export function checkRightTop(row, col, arr) {
  if(arr[row - 1] && arr[row - 1][col + 1]) {
    return 1;
  }
  return 0;
}

export function checkLeftBottom(row, col, arr) {
  if(arr[row + 1] && arr[row + 1][col - 1])  {
    return 1;
  }
  return 0;
}

export function checkRightBottom(row, col, arr) {
  if(arr[row + 1] && arr[row + 1][col + 1]) {
    return 1;
  }
  return 0;
}

export function checkNeighbours(row, col, cells) {
  const checkerFunctions = [
      checkLeft,
      checkRight,
      checkBottom,
      checkTop,
      checkLeftBottom,
      checkLeftTop,
      checkRightBottom,
      checkRightTop];

  const neighbours = checkerFunctions.reduce((acc, checker) => acc + checker(row, col, cells), 0);
  return neighbours;
} 