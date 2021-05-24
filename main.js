var drugsList = [
  "LSD",
  "Mushrooms",
  "DMT",
  "Mescaline",
  "DOx",
  "NBOMe",
  "2C-x",
  "2C-T-x",
  "5-MeO-xxT",
  "Cannabis",
  "Ketamine",
  "MXE",
  "DXM",
  "Nitrous Oxide",
  "Amphetamines",
  "MDMA",
  "Cocaine",
  "a-PVP*",
  "4-MMC**",
  "Caffeine",
  "Alcohol",
  "GHB/GBL",
  "Opioids",
  "Tramadol",
  "Benzodiazepines",
  "MAOI",
  "SSRI",
];

var boolList = [];
var scoreList = [];

var drugMixes = [
  [
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    4,
    5,
    5,
    4,
    3,
    5,
    5,
    5,
  ],
  [
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    4,
    5,
    5,
    4,
    3,
    5,
    1,
    5,
  ],
  [
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    4,
    5,
    5,
    4,
    3,
    5,
    1,
    5,
  ],
  [
    1,
    1,
    1,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    3,
    3,
    4,
    5,
    5,
    4,
    3,
    5,
    2,
    5,
  ],
  [
    1,
    1,
    1,
    2,
    0,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    3,
    1,
    3,
    2,
    3,
    3,
    3,
    2,
    5,
    5,
    4,
    3,
    5,
    2,
    5,
  ],
  [
    1,
    1,
    1,
    2,
    2,
    0,
    2,
    2,
    2,
    2,
    1,
    2,
    3,
    1,
    3,
    2,
    3,
    6,
    3,
    2,
    5,
    5,
    4,
    3,
    5,
    2,
    5,
  ],
  [
    1,
    1,
    1,
    2,
    2,
    2,
    0,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    3,
    3,
    3,
    4,
    5,
    5,
    4,
    3,
    5,
    2,
    5,
  ],
  [
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    0,
    2,
    2,
    1,
    2,
    3,
    1,
    3,
    2,
    3,
    3,
    6,
    4,
    5,
    5,
    4,
    3,
    5,
    2,
    5,
  ],
  [
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    0,
    2,
    1,
    1,
    3,
    1,
    3,
    2,
    3,
    3,
    3,
    4,
    5,
    5,
    4,
    3,
    5,
    6,
    5,
  ],
  [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    4,
    1,
    1,
    1,
    1,
    5,
    1,
    4,
  ],
  [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    4,
    1,
    2,
    1,
    2,
    3,
    3,
    4,
    6,
    6,
    6,
    6,
    2,
    2,
    4,
  ],
  [
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    1,
    1,
    1,
    0,
    4,
    1,
    2,
    2,
    2,
    3,
    3,
    4,
    6,
    6,
    6,
    6,
    2,
    3,
    2,
  ],
  [
    1,
    1,
    1,
    1,
    3,
    3,
    1,
    3,
    3,
    1,
    4,
    4,
    0,
    1,
    3,
    6,
    3,
    3,
    6,
    4,
    6,
    6,
    6,
    6,
    2,
    6,
    6,
  ],
  [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    4,
    2,
    2,
    2,
    2,
    5,
    4,
    4,
  ],
  [
    2,
    2,
    2,
    2,
    3,
    3,
    2,
    3,
    3,
    2,
    2,
    2,
    3,
    1,
    0,
    1,
    2,
    6,
    2,
    2,
    2,
    2,
    2,
    6,
    5,
    6,
    4,
  ],
  [
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    1,
    1,
    2,
    6,
    1,
    1,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    4,
    6,
    5,
    6,
    5,
  ],
  [
    2,
    2,
    2,
    2,
    3,
    3,
    2,
    3,
    3,
    2,
    2,
    2,
    3,
    1,
    2,
    2,
    0,
    3,
    2,
    2,
    3,
    2,
    6,
    6,
    5,
    6,
    4,
  ],
  [
    2,
    2,
    2,
    3,
    3,
    6,
    3,
    3,
    3,
    2,
    3,
    3,
    3,
    1,
    6,
    2,
    3,
    0,
    3,
    2,
    2,
    3,
    3,
    6,
    5,
    6,
    4,
  ],
  [
    1,
    1,
    1,
    3,
    3,
    3,
    3,
    6,
    3,
    1,
    3,
    3,
    6,
    1,
    2,
    2,
    2,
    3,
    0,
    2,
    2,
    2,
    3,
    6,
    5,
    6,
    5,
  ],
  [
    4,
    4,
    4,
    4,
    2,
    2,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    2,
    2,
    2,
    3,
    2,
    0,
    4,
    4,
    4,
    4,
    5,
    4,
    4,
  ],
  [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    1,
    6,
    6,
    6,
    2,
    2,
    2,
    3,
    2,
    2,
    4,
    0,
    6,
    6,
    6,
    6,
    3,
    2,
  ],
  [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    1,
    6,
    6,
    6,
    2,
    2,
    2,
    2,
    3,
    2,
    4,
    6,
    0,
    6,
    6,
    6,
    2,
    4,
  ],
  [
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    1,
    6,
    6,
    6,
    2,
    2,
    4,
    6,
    3,
    3,
    4,
    6,
    6,
    0,
    6,
    6,
    1,
    4,
  ],
  [
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    1,
    6,
    6,
    6,
    2,
    6,
    6,
    6,
    6,
    6,
    4,
    6,
    6,
    6,
    0,
    6,
    6,
    6,
  ],
  [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    2,
    2,
    2,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    0,
    1,
    4,
  ],
  [
    5,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    6,
    1,
    2,
    3,
    6,
    4,
    6,
    6,
    6,
    6,
    6,
    4,
    3,
    1,
    2,
    6,
    1,
    0,
    6,
  ],
  [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    4,
    4,
    2,
    6,
    4,
    4,
    5,
    4,
    4,
    5,
    4,
    2,
    4,
    4,
    6,
    4,
    6,
    0,
  ],
];

var warnings = [
  "Fine Mix",
  "Amplifying",
  "Caution",
  "Unsafe",
  "No Amplfication",
  "Counteracting",
  "Dangerous",
];
var comments = [];

var selectedDrugs = [];
var results = [];

var body = document.getElementsByTagName("BODY")[0];
var table = document.getElementById("matrix");
var commentTable = document.getElementById("comments");
var scoreTable = document.getElementById("scores");
var row = table.insertRow(0);
var temp = 0;
var columnAmount = 4;
var score = [0, 0, 0, 0, 0, 0];
var score1;

drugsList.forEach((element, index) => {
  boolList[index] = 0;
  scoreList[index] = 0;
});
start();

function start() {
  //create boolean list to keep track of selected drugs
  score.forEach((scoreNumber, index) => {
    score1 = document.createElement("p");
    score1.textContent = scoreNumber;
    score1.id = String(index);
    scoreTable.appendChild(score1);
  });
  drugsList.forEach((drug, index) => {
    if (index % columnAmount == 0 && index != 0) {
      temp += 1;
      row = table.insertRow(temp);
    }

    var cell = row.insertCell(index - temp * columnAmount);

    var btn = document.createElement("button");
    cell.appendChild(btn);

    btn.name = index;
    btn.id = "b0";
    btn.textContent = drugsList[index];
    btn.onclick = function () {
      main(btn);
      checkMix(btn);
      updateScore();
    };
  });
}

function main(btn) {
  if (boolList[btn.name] == 0) {
    boolList[btn.name] = 1;
  } else if (boolList[btn.name] == 1) {
    boolList[btn.name] = 0;
    scoreList[btn.name] = 0;
  }
}

function checkMix(btn) {
  resetComments();
  selectedDrugs = [];
  selectedDrugs = listSelectedDrugs();
  results = listCombinations();
  results = listCombinationIndexes();

  //Reset score temporarily
  score.fill(0);
  scoreList.fill(0);

  comments = [];
  var unsortedComments = [];
  var sortedComments = [];
  //Set score
  for (var i = 0; i < results.length; i++) {
    var singleDrugContent = drugMixes[results[i].first];
    var scoreIndex = singleDrugContent[results[i].second];
    score[scoreIndex - 1]++;
    //Update scores
    //Du gør det for alle. Du skal kun gøre det for first og second
    if (scoreList[results[i].first] < scoreIndex) {
      scoreList[results[i].first] = scoreIndex;
    }
    if (scoreList[results[i].second] < scoreIndex) {
      scoreList[results[i].second] = scoreIndex;
    }
    var comment = warnings[scoreIndex];
    if (scoreIndex != 1) {
      unsortedComments.push(comment);
    }
  }

  sortedComments = sortComments(unsortedComments);
  sortedComments.forEach((sortedComment, index) => {
    var commentTemplate =
      drugsList[results[index].first] +
      " + " +
      drugsList[results[index].second] +
      ": ";
    comments[index] = commentTemplate + sortedComment;
  });

  updateComment();
  colorButtons();
}

function listSelectedDrugs() {
  //Make list of selected drugs
  for (var i = 0; i < scoreList.length; i++) {
    if (boolList[i] != 0) {
      selectedDrugs.push(drugsList[i]);
    }
  }
  return selectedDrugs;
}

function listCombinations() {
  results = [];

  //Make combinations of selected drugs
  for (var i = 0; i < selectedDrugs.length - 1; i++) {
    for (var j = i + 1; j < selectedDrugs.length; j++) {
      var content = { first: selectedDrugs[i], second: selectedDrugs[j] };
      results.push(content);
    }
  }
  return results;
}

function listCombinationIndexes() {
  //Get Indexes of selected drugs
  for (var i = 0; i < results.length; i++) {
    results[i].first = drugsList.indexOf(results[i].first);
    results[i].second = drugsList.indexOf(results[i].second);
  }
  return results;
}

function colorButtons() {
  scoreList.forEach((combinationScore, index) => {
    //For every button
    var coloredButton = document.getElementsByName(index)[0]; //Get button
    coloredButton.id = "b" + String(combinationScore); //Change button Color
    if (boolList[index] == 1 && combinationScore == 0) {
      coloredButton.id = "b0a";
    }
  });
}

function updateScore() {
  score.forEach((scoreNumber, index) => {
    score1 = document.getElementById(index);
    score1.textContent = scoreNumber;
  });
}

function resetComments() {
  for (var i = 0; i < commentTable.rows.length; i++) {
    //Delete rows from commentTable for each row in commentTable
    commentTable.deleteRow(i);
  }
}

function sortComments(unsortedComments) {
  unsortedComments.sort(function (b, a) {
    return warnings.indexOf(a) - warnings.indexOf(b);
  });
  return unsortedComments;
}

function updateComment() {
  comments.forEach((comment, index) => {
    if (comments.includes(comment) && index < 10) {
      var commentElement = document.createElement("a");
      var commentRow = commentTable.insertRow(index);
      commentElement.textContent = comment;
      commentRow.appendChild(commentElement);
    }
  });
}

function reset() {
  location.reload();
}
