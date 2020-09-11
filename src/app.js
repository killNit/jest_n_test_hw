const numberArray = [1, 2, 3, 4]
numberArray
//function takes an array of ints and returns the lowest number
export function lowestNum(arr) {
    if (arr.length === 0) {
        return "no values";
      }
    
      let lowestValue = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestValue) {
          // swap
          lowestValue = arr[i];
        }
      }
      return lowestValue;
    }



export function doubleArray(numberArray) {
    return numberArray.map(function (num) {
        return num * 2;
    });
    
}



export function evensOnlyArray(numberArray) {
    return numberArray.filter(num => num % 2 == 0);
    
}


export function arraySum(numberArray) {
    let sum = 0;
    for (const tot of numberArray) {
        sum += tot;
    }
    return sum;

}



export function allNumbersGreaterThanZero(numberArray) {
    let result = true;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 0) {
            result = false
            break;
        }
    }
    return result;
}

export function someNumbersAreOdd(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 != 0)
        return true;
        else return false;
    }
}

export function evensOnlyAndDoubleArray(numberArray) {
    return numberArray
      .filter(function (num) {
        return num % 2 == 0;
      })
      .map(function (num) {
        return num * 2;
      });
  }

  export function findItem(numberArray) {
    const located = numberArray.find((number) => number == 1);
    if (located != 1) {
      return "not found";
    }
    return "located";
  }

  export function sortArray(numberArray) {
  return numberArray.sort(function (a, b) {
    return b - a;
  });
}