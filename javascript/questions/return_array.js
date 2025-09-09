// Create an array of names of senior employees

const employees=[
    {
        name:"prakash",
        age:43
    },
    {
        name:"charu",
        age:21,
    },
    {
        name:"shimla",
        age:43,
    },
]
const result=employees.filter(employees=>employees.age>23)
console.log(result);