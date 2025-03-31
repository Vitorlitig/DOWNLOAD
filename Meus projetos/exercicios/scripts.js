const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Carlos", testGrade: 5},
    {name: "Maria", testGrade: 8},
    {name: "João", testGrade: 9},
    {name: "Mario", testGrade: 3},
    {name: "Jorge", testGrade: 2},
    {name: "Pedro", testGrade: 10},
]

const listStudants = students.map((student) => {
    return {
        name: student.name ,
        studentGrade: student.testGrade >= 5  ? 'APROVADO:' :"REPROVADO",  
    }
}) 

console.log(listStudants)