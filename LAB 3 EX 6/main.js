//TODO temperature
// 1a. Min
// 1b. Max
// 2. Arithmetic Mean'
// 3. Sort
// 4. IDK
// 5. Add elements 2 table
// 6. Remove elements from table
// 7. Check how many days bellow average temp

let temp = [];
let tempSort = temp;

document.getElementById('start').addEventListener('click', function () {
	FormArray(document.getElementById('days').value);
});

document.getElementById('startFindMin').addEventListener('click', function () {
	FindMin();
});

document.getElementById('startFindMax').addEventListener('click', function () {
	FindMax();
});

document.getElementById('startArithmetic').addEventListener('click', function () {
  ArithmeticMean();
});

document.getElementById('startSorting').addEventListener('click', function () {
  SortTemp();
});

document.getElementById('startAdding').addEventListener('click',function () {
  AddElements(document.getElementById('numberToAdd').value);
});

document.getElementById('startRemoving').addEventListener('click', function () {
  RemoveElement(document.getElementById('positionToRemove').value)
});

document.getElementById('startAveraging').addEventListener('click', function () {
  DaysBellowAverage();
});

const FormArray = (number) => {
	for (let i = 0; i < number; i++) {
		temp.push(Math.floor(Math.random() * 22) - 7); // Temp values between [-7 .. +15]
	}
  console.log(temp);
	return temp;
};

const FindMin = () => {
	let min = temp[temp.length-1];
	temp.forEach(number => {
		if (number <= min) {
			min = temp[number]
		}
	});
	console.log(min);
	return min;
};

const FindMax = () => {
	let max = temp[0];
	temp.forEach(number => {
		if (number >= max) { }
		max = temp[number]
	});
	console.log(max);
	return max;
};

const ArithmeticMean = () => {
  let sum = 0;
  temp.forEach(number => {
    sum += number;
  });
  console.log(Math.round(sum / temp.length));
  return Math.round(sum / temp.length);
};

const SortTemp = () => {
  tempSort.sort(function (a, b) {
    return a - b
  });
  console.log(tempSort);
  return tempSort;
};

const AddElements = (numberToAdd) => {
  temp.push(numberToAdd);
  console.log(temp);
  return temp;
};

const RemoveElement = (number) => {
  temp.splice(number ,1);
  console.log(temp);
  return temp;
};

const DaysBellowAverage = () => {
  let count = 0;
  temp.forEach(number => {
    if (number < ArithmeticMean()) {
      count++
    }
  });
  console.log(count);
  return count;
};