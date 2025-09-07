const employees={
    engineers:{
        em1:{
            id:1,
            name:"charu sharma",
            occupation:"engineer"
        },
        em2:{
            id:2,
            name:"prakash sarkari",
            occupation:"mentor"

        },

    },
    placement:{
        em3:{
            id:3,
            name:"jay kumar",
            occupation:"doctor"
        },
    },

    youtube:{
        em4:{
            id:4,
            name:"shweta",
            occupation:"chef"
        },
    },


}

// let {engineers: {em2:{id, occupation}}}=employees;
// console.log(id,occupation);

let {youtube:{em4:{id,occupation}}}=employees;
console.log (id,occupation);