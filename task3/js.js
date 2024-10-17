// Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya"]

let filteredStates = states.filter((state) => {
    return !state.startsWith("A") && !state.startsWith("E") && !state.startsWith("I") && !state.startsWith("O") && !state.startsWith("U")
})
console.log(filteredStates)


// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


let str = 'I love my India'
let str1 = ''
for(let i = str.length -1; i>=0; i--){
    str1 += str[i]
}
console.log(str1)


// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = 'INDIA'
let string1 = string.split('')
string1.splice(3, 0, 'O', 'N', 'E', 'S')
console.log(string1.join(''))


// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let string2 = 'I love my India'
let countVowel = 0
let countConsonant = 0
for(let i = 0; i< string2.length; i++){
    if(string2[i] === 'a' || string2[i] === 'e' || string2[i] === 'i' || string2[i] === 'o' || string2[i] === 'u'){
        countVowel++
}}

for(let i = 0; i< string2.length; i++){
    if(string2[i] !== 'a' && string2[i] !== 'e' && string2[i] !== 'i' && string2[i] !== 'o' && string2[i] !== 'u'){
        countConsonant++
}}
console.log(countVowel, countConsonant)

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function correctfn(string, wrong, correct){
    return string.replace(wrong, correct)
}

console.log(correctfn('I love my India', 'India', 'INDIA'))
console.log(correctfn('I love my India', 'my', 'your'))

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.


let inputArr = [1,2,3,9,10,7,5,4,3]
let answer = inputArr.filter((num) => {
    return num > 5

})
console.log(answer)


// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const output = students.map(student => {

    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  
    return { name: student.name, average: average };
  });
  
  console.log(output);

  
//   Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
//   Example - 456 - 4+5+6 = 15 - 1+5 = 6.



function repeatedSumOfDigits(number){
    let sum = 0
    while(number > 0){
        sum += number % 10
        number = Math.floor(number / 10)
    }
    return sum
}
console.log(repeatedSumOfDigits(456))


// Q9) Write a function to count the number of words in a paragraph.


function countWords(paragraph){
    return paragraph.split(' ').length
}

console.log(countWords('I love my India'))


// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


function reverseString(string){
    return string.split('').reverse().join('')
}
console.log(reverseString('Hello'))


// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.


const studentss = [
    {
        name: "student1",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student2",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        name: "student3",
        scores: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

// Calculate the average scores for each student
const outpu = studentss.map(student => {
    const scoresArray = Object.values(student.scores);
    
    const totalScore = scoresArray.reduce((sum, score) => sum + score, 0);
        const averageScore = totalScore / scoresArray.length;
    return {
        [student.name]: { average: averageScore }
    };
});

console.log(outpu);








