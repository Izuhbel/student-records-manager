// ============================================================
// TAKE-HOME ASSIGNMENT: Student Records Manager
// Save as assignment.js and upload to GitHub.
// ============================================================

// 1. Create an array called students with at least 5 student objects.
//    Each object needs: name, age, course, score
const students = [
    {
        name: "Adaobi Onyenaucheya",
        age: 22,
        course: "English Language",
        score: 72
    },
    {
        name: "Chidi Okpara",
        age: 24,
        course: "Biology",
        score: 45
    },
    {
        name: "Benjamin Okonkwo",
        age: 21,
        course: "Computer Science",
        score: 88
    },
    {
        name: "Ngozi Nwosu",
        age: 23,
        course: "English Language",
        score: 56
    },
    {
        name: "David Eze",
        age: 25,
        course: " Mathematics",
        score: 63
    }
];

// 2. Return a letter grade (A, B, C or F) for a score
function getGrade(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}

// 3. Log a sentence like:
//    "Amina (22) is studying Web Development and scored 72 - Grade A"
function displayStudent(student) {
    console.log(
        `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - Grade ${getGrade(student.score)}`
    );
}

// 4. Use forEach to display every student with displayStudent
students.forEach((student) => {
    displayStudent(student);
});

// 5. Use filter to create an array of students who passed (score >= 50), then log it
const passedStudents = students.filter((student) => {
    return student.score >= 50;
});

console.log(passedStudents);
// 6. Use map to create an array of all student names, then log it
const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);

// 7. BONUS: return the average score of all students
function averageScore(students) {
    let total = 0;

    for (const student of students) {
        total += student.score;
    }

    return total / students.length;
}

console.log("Average score:", averageScore(students));