//TODO numbers
// 1. Verify if number is even
// 2. All numbers inside interval
// 3. First 'n' elements of the interval
// 4. Biggest number from interval

let a = Math.pow(-2, 31);
let b = Math.pow(2, 31);
let numbers = [];
let firstNumbers = [];

document.getElementById('startButton').addEventListener('click', function () {
  CheckIfEven(document.getElementById('nr').value);

});

document.getElementById('startInterval').addEventListener('click', function () {
  NumbersInInterval(document.getElementById('bottomLine').value, document.getElementById('topLine').value);
});

document.getElementById('startFirstNumbers').addEventListener('click', function () {
  FirstNumbers(document.getElementById('nNumbers').value);
});

document.getElementById('startHighestNumber').addEventListener('click', function () {
  HighestNumber();
});

document.getElementById('summarize').addEventListener('click', function () {
  ShowResult();
});

const CheckIfEven = (number) => {
  if (number % 2 === 0) {
    console.log('EVEN');
    return true;
  } else if (Math.abs(number) % 2 === 1) {
    console.log('ODD');
    return false;
  }
};

const NumbersInInterval = (bottomLine, topLine) => {
  if (a < bottomLine && topLine < b) {
    for (let i = bottomLine; i <= topLine; i++) {
      if (CheckIfEven(i) === true) {
        numbers.push(i);
      }
    }
  } else {
    alert('Outside acceptable bounds')
  }
  console.log(numbers);
  return numbers;
};

const FirstNumbers = (number) => {
  for (let i = 0; numbers[i] < numbers[number]; i++) {
    firstNumbers.push(numbers[i]);
  }
  console.log(firstNumbers);
  return firstNumbers;
};

const HighestNumber = () => {
  let max = numbers[0];
  numbers.forEach(number => {
        if (number > max) {
          max = number
        }
      }
  );
  console.log(max);
  return max;
};

const ShowResult = () => {
  document.getElementById('interval').innerHTML = numbers;
  document.getElementById('firstNumbers').innerHTML = firstNumbers;
  document.getElementById('highestNumber').innerHTML = HighestNumber();
};