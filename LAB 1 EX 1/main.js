//TODO Students mark
// 1. Add mark from input;
// 2. Validate mark
// 3. Make calculations
// 4. Display calculations


document.getElementById('btn').addEventListener('click', function() {
  addMark(Number(document.getElementById('studentsMark').value) ,Number(document.getElementById('mark').value));
  calculations();
});

let marks = [];

const addMark = (studentsMark ,mark) => { // adds a mark to the studentsMark array and validates mark
  if (studentsMark > marks.length && mark >= 1 && mark <= 10) {
    marks.push(mark);
    console.log(marks);
    displayResult();
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
  return `Performance ${Math.round(performance * 100 / marks.length)}%;
          Quality ${Math.round(quality  * 100 / marks.length)}%;
          Media ${Math.round(media / marks.length)};
          Difference ${difference};
          Min ${min}; 
          Max ${max}`
};

const displayResult = () => {
  document.getElementById('boxForMarks').innerHTML = marks + '<br>' + calculations();
};


