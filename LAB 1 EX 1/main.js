//TODO Students mark
// 1. Add mark from input;
// 2. Validate mark
// 3. Make calculations
// 4. Display calculations


document.getElementById('btn').addEventListener('click', function () {
  addMark(Number(document.getElementById('studentsMark').value), Number(document.getElementById('mark').value));
  calculations();
  showResults();
});

let marks = [];

const addMark = (studentsMark, mark) => { // adds a mark to the studentsMark array and validates mark
  if (studentsMark > marks.length && mark >= 1 && mark <= 10) {
    marks.push(mark);
    console.log(marks);
    showResults();
  }
};

const calculations = () => { // Calculates everything needed
  let performance = 0;
  let quality = 0;
  let min = marks[0];
  let max = marks[0];
  let difference = 0;
  let media = 0;
  marks.forEach(mark => { // goes through all elements
    if (mark >= 5) {
      performance++;
    }
    if (mark >= 9) {
      quality++;
    }
    if (mark < min) {
      min = mark
    }
    if (mark > max) {
      max = mark
    }
    difference = max - min;
    media += mark;
  });
  console.log(`Performance ${Math.round(performance * 100 / marks.length)}%;
          Quality ${Math.round(quality * 100 / marks.length)}%;
          Media ${Math.round(media / marks.length)};
          Difference ${difference};
          Min ${min}; 
          Max ${max}`);
  return [
    max,
    min,
    difference,
    Math.round(quality * 100 / marks.length),
    Math.round(performance * 100 / marks.length),
    Math.round(media / marks.length),
  ];
};

const showResults = () => {
  let results = calculations();
  document.getElementById('marks').innerHTML ='The marks are ' +  marks;
  document.getElementById('max').innerHTML ='The max mark is ' + results[0];
  document.getElementById('min').innerHTML ='The minimum marks is ' + results[1];
  document.getElementById('difference').innerHTML = 'The difference is ' + results[2];
  document.getElementById('quality').innerHTML ='The quality is ' + results[3] + '%';
  document.getElementById('performance').innerHTML = 'The performance is ' + results[4] + '%';
  document.getElementById('media').innerHTML = 'The media is ' + results[5];
};

