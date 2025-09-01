// loop question

const name = "charu sharma";
const vowels = "aeiou";
let count = 0;

for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
        count++;
        console.log(`Found vowel: ${name[i]}`);
    }
}

console.log(`Total number of vowels: ${count}`);