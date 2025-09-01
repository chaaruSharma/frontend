// performance insertion/ deletion

const newMap = new Map();
newMap.set(10,`value will be here`+` value 2 is here`);
newMap.set(11,`awesome`);
console.log(newMap);
console.log(newMap.has(10));
newMap.delete(10);
console.log(newMap);
