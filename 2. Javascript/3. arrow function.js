//절대로 변하지 않는 변수
const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;  //let -> 재할당 가능

//지역변수 user~
//arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobby
    );
}

const add = (a, b) => a + b;
const addOne = a => a + 1;  //변수가 하나일 때는 ()필요X
const addRandom = () => 1 + 2;  //random일 때는 ()안 빈칸으로

console.log(add(1, 2));  //3
console.log(addOne(1));  //2
console.log(addRandom());  //3

//세 가지 변수는 함수에서 직접 액세스 가능
console.log(summarizeUser(name, age, hasHobbies));

