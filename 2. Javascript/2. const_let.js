//절대로 변하지 않는 변수
const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;  //let -> 재할당 가능
name = "Maximilian";
//const->변수 재선언, 재할당 불가능


//지역변수 user~
function summarizeUser(userName, userAge, userHasHobby){
    return ('Name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    ' and the user has hobbies: ' + 
    userHasHobby
    );
}

//세 가지 변수는 함수에서 직접 액세스 가능
console.log(summarizeUser(name, age, hasHobbies));

