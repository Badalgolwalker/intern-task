// 1.Write code to display from 1 to 100 but just even numbers


for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


function calculate(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    }
}

console.log(calculate(5, 5, "add"));
console.log(calculate(5, 5, "subtract"));
console.log(calculate(5, 5, "multiply"));
console.log(calculate(5, 5, "divide"));



// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.



function findTax(salary) {
    switch (true) {
        case salary >= 500000 && salary < 1000000:
            return salary * 0.1;
        case salary >= 1000000 && salary < 1500000:
            return salary * 0.2;
        case salary >= 1500000:
            return salary * 0.3;
        default:
            return 0;
    }
}


console.log(findTax(500000));
console.log(findTax(1000000));
console.log(findTax(1500000));
console.log(findTax(2000000));



// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


function findProduct(n1, n2) {
    let sum = 0;
    let n1String = n1.toString();
    let n2String = n2.toString();
    for (let i = 0; i < n1String.length; i++) {
        sum += n1String[i] * n2String[i];
    }
    return sum;
}

console.log(findProduct(6, 34));



