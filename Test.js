const student ={
    name:"Marie",
    age : 20,
    courses : []
}

student.age = 21;
student.grade ="A";

student.courses.push("math","physics", "chemistry")

const index = student.courses.indexOf("physics")

const premiersCours = student.courses.slice(0, 2)



console.log(premiersCours);
console.log(index);
console.log(student);
