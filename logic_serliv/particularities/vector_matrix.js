const grades = [
    [3, 5, 6, 1],
    [2, 8, 4, 9],
    [9, 3, 5, 7]
]

console.log(grades[1]); // [2, 8, 4, 9]
console.log(grades[1][2]); // 4
console.log(grades[2][1]); // 3

for (let i = 0; i < grades.length; i++) {
    const gradesStudents = grades[i];
    console.log(gradesStudents);

    for (let j = 0; j < gradesStudents.length; j++) {
        // console.log(gradesStudents[j]);
        console.log(grades[i][j]); // Matrix
    }
}