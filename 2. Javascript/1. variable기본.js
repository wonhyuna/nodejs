var name = "Max";
var age = 29;
var hasHobbies = true;

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

