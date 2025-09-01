const studentIds = new Set();

studentIds.add(1);
studentIds.add(2);
studentIds.add(3);
studentIds.add(1);

console.log(studentIds);
const studentId = new Array();
studentId.push(1);
studentId.push(4);
studentId.push(5);
studentId.push(6);
studentId.push(7);
studentId.push(18);
studentId.push(17);
studentId.push(35);
studentId.push(34);
studentId.push(1);
studentId.push(4);
studentId.push(5);
studentId.push(6);
studentId.push(7);
studentId.push(18);
studentId.push(17);
studentId.push(35);
studentId.push(34);

console.log(studentId);

const uniqueStudentIds = new Set(studentId);
console.log(uniqueStudentIds);
const newStudentIds = [...uniqueStudentIds];
console.log(newStudentIds);

const newlist = new Set();
newlist.add(1);
newlist.add(3);
newlist.add(5);
console.log(newlist.has(3));
newlist.forEach((value) => {
    console.log({value})
})

