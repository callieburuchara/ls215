// ======================== CONSTANTS ========================= //

const MIN_A = 93;
const MIN_B = 85;
const MIN_C = 77;
const MIN_D = 69;
const MIN_E = 60;
const MIN_F = 0;
const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;
const EXAM_AMOUNT = 4;
const STUDENT_AMOUNT = 5;

// ======================== HELPER METHODS ========================= //

function fullGrade(student) {
  let number = calculateNumberGrade(student.scores);
  let letter = calculateLetterGrade(number);

  return `${number} (${letter})`;
}

function calculateNumberGrade(scores) {
  let examAvg = scores.exams.reduce((sum, num) => sum + num) / EXAM_AMOUNT;
  let exerciseAvg = scores.exercises.reduce((sum, num) => sum + num);
  return Math.round((examAvg * EXAM_WEIGHT) + (exerciseAvg * EXERCISE_WEIGHT));
}


function calculateLetterGrade(number) {
  if (number >= MIN_A) return 'A';
  if (number >= MIN_B) return 'B';
  if (number >= MIN_C) return 'C';
  if (number >= MIN_D) return 'D';
  if (number >= MIN_E) return 'E';
  if (number >= MIN_F) return 'F';
}

function groupAllExams(data) {
  let exams = []

  Object.keys(data).forEach ((student, sidx) => {
    data[student].scores.exams.forEach ((examScore, eidx) => {

      if (sidx === 0) {
        exams[eidx] = [examScore]; 
      } else {
        exams[eidx].push(examScore); y
      }
      
    });
  });

  return exams
}

function configureClassExams(data) {
  let allExams = groupAllExams(data);

  return allExams.map(exam => {
    let average = exam.reduce((sum, num) => sum + num) / STUDENT_AMOUNT;
    let min = sortNumbers(exam)[0];
    let max = sortNumbers(exam)[exam.length - 1];

    return {average: average, minimum: min, maximum: max};
  });
}

function sortNumbers(arr) {
  function smallToGreat(first, second) {
    if (first < second) {
      return -1;
    } else if (second > first) {
      return 1;
    } else {
      return 0;
    };
  };

  return arr.sort(smallToGreat);
  
}

// ======================== MAIN METHOD ========================= //


function generateClassRecordSummary(data) {
  let studentGrades = [];
  
  Object.keys(data).forEach(student => {
    studentGrades.push(fullGrade(data[student]));
  });

  let exams = configureClassExams(data);

  return {studentGrades, exams};
}



// ======================== TEST CASES ========================= //

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
