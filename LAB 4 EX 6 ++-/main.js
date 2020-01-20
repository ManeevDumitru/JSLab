//TODO Bidimensional table
// 1a. Min / Poz Min
// 1b. Max / Poz Max
// 2. Change 2 columns with places
// 3. Add a column with ( my case ) days below average temp
// 4. Sort after added column ???
// 5. Create a table from given task

let temp = [];

document.querySelector('#start').addEventListener('click', function () {
  CreateTable(document.getElementById('n').value, document.getElementById('m').value);
});
document.querySelector('#startMin').addEventListener('click', function () {
  Min(document.getElementById('n').value, document.getElementById('m').value);
});
document.querySelector('#startMax').addEventListener('click', function () {
  Max(document.getElementById('n').value, document.getElementById('m').value);
});
document.querySelector('#startChange').addEventListener('click', function () {
  ChangeRows(document.querySelector('#colA').value, document.querySelector('#colB').value)
});
document.querySelector('#startCalculations').addEventListener('click', function () {
  Calculations(document.querySelector('#n').value, document.querySelector('#m').value)
});
document.querySelector('#startAdding').addEventListener('click', function () {
  AddRow(document.getElementById('n').value, document.querySelector('#m').value)
});
document.getElementById('startGenerate').addEventListener('click', function () {
  GenerateTable()
});

const CreateTable = (n, m) => {
  for (let i = 0; i < n; i++) {
    temp[i] = [];
    for (let j = 0; j < m; j++) {
      temp[i][j] = Math.floor(Math.random() * 23) - 7; // -7 .. 15
    }
  }
  n.value = " ";
  m.value = ' ';
  console.log(temp);
  return temp;
};

const Min = (n, m) => {
  let min = temp[0][0];
  let posRow = 0;
  let posColumn = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] < min) {
        min = temp[i][j];
        posRow = i;
        posColumn = j;
        console.log(min + ' i ' + posRow + ' j ' + posColumn)
      }
    }
  }
  return [min, posRow, posColumn]
};

const Max = (n, m) => {
  let max = temp[0][0];
  let posRow = 0;
  let posColumn = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] > max) {
        max = temp[i][j];
        posRow = i;
        posColumn = j;
        console.log(max + ' i ' + i + ' j ' + j)
      }
    }
  }
  return [max, posRow, posColumn]
};

const Calculations = (n, m) => {
  let sum = 0;
  let nrElements = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      sum += temp[i][j];
      nrElements++;
    }
  }
  console.log(Math.round(sum / nrElements));
  return (Math.round(sum / nrElements));
};

const ChangeRows = (n, m) => {
  let aux;
  aux = temp[n];
  temp[n] = temp[m];
  temp[m] = aux;
  console.log(temp);
  return temp;
};

const AddRow = (n, m) => {
  let aux = [];
  for (let i = 0; i < n; i++) {
    aux[i] = Number(Calculations(n, m));
  }
  temp[temp.length] = aux;
  console.log(temp);
};

const GenerateTable = () => {
  let test = [];
  let l = 1;
  for (let i = 0; i < 3; i++) {
    test[i] = [];
    let k = 1;
    for (let j = 0; j < 3; j++) {
      test[i][j] = k;
      k += l;
    }
    l++;
  }
  console.log(test);
};