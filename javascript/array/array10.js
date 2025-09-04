// destruct the array

const arr = [["html","css","js"],1,2,3,4,5,6,7];
const [course, ...rest]=arr;
console.log(rest);
console.log(course);