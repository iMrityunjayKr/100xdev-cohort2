console.log("hello world");

function greet(firstname = "Mrityunjay", lastname = "Kumar") {
    console.log(`Welcome ${firstname} ${lastname}`);

}
greet("Sameera", "Khana");

//program that greets a person based on their gender (if else)

function greetBasedOnGender() {
    let male
}

//counting from 1 to 1000

for (let i = 1; i <= 1000; i++) {
    // console.log(`${i}`);  

}
let personArray = ["Mrityunjay", "raman", "suman"]
// console.log(personArray);

//print the even values in an array

const ages = [22, 21, 45, 41, 54, 44, 56, 52, 32]

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(`${ages[i]}`);
    }
}

//print biggest no in an array
let biggestNo =ages[0] ;
for (let i = 0; i < ages.length; i++) {
    if(ages[i]>biggestNo){
        biggestNo = ages[i]
    }
}
console.log(`Biggest No: ${biggestNo}`);
