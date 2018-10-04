module.exports = function solveSudoku(matrix) {

  let zeros=[];

  for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix.length; j++){
      if(matrix[i][j] === 0){
        zeros.push([i,j]);
      }
    }
  }
  

  function checkCol(matrix, col, number){
    for(let i=0;i<matrix.length;i++){
      if(matrix[i][col] === number){
        return false;
      }
    }
    return true;
  }


  function checkRow(matrix, row, number){
    for(let i=0;i<matrix[row].length;i++){
      if(matrix[row][i] === number){
        return false;
      }
    }
    return true;
  }


  function checkSquare(matrix, row, col, number){
    
    const square = 3;
    let squareRow = 0;
    let squareCol = 0;

    for(let i = squareRow; i<=row; i += square){
      squareRow = i;
    }

    for(let i = squareCol; i<=col; i += square){
      squareCol = i;
    }

    for(let i = squareRow; i<squareRow+square; i++){
      for(let j = squareCol; j<squareCol+square; j++){
        if(matrix[i][j] === number){
          return false;
        }
      }
    }

    return true;
  }


  function checkAll(matrix, col, row, number){
    if(checkCol(matrix, col, number) && checkRow(matrix, row, number) && checkSquare(matrix, row, col, number)){
      return true;
    }
    else 
      return false;
  }

  let found = false;
  let max = 9;
  let number = 0;

  for(let i = 0; i<zeros.length;){
    number = matrix[zeros[i][0]][zeros[i][1]]+1;
    found = false;

    while(!found && number<=max){
      if(checkAll(matrix, zeros[i][1], zeros[i][0], number)){
        found = true;
        matrix[zeros[i][0]][zeros[i][1]] = number;
        i++;
      }
      else{
        number++;
      }
    }

    if(!found){
      matrix[zeros[i][0]][zeros[i][1]] = 0;
      i--;
    }
  }

  /*for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix.length; j++){
      if(matrix[i][j] === 0){
        zeros.push([i,j]); 
        for(let k = 0; k<numbers.length; k++){
          if(checkAll(matrix, j, i, numbers[k])){
            matrix[i][j] = numbers[k];
            break;
          }
        }

        if(matrix[i][j] == 0){
          i=zeros[zeros.length-1][0];
          j=zeros[zeros.length-1][1];
          zeros.pop();
        }
      }
    }
  }*/

  return matrix;
}
