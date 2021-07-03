var person ={
    name: 'Max',
    age: 29,
    greet(){        //arrow function 불가능
        console.log("Hi, I am " + this.name)
    }
};

const copiedPerson = {...person};    //slice해서 하나씩 저장 (spread operator)
console.log(copiedPerson);

//object.assign() 객체 병합
var person = { name: 'Max' }
var copiedPerson2 = Object.assign({}, person)
console.log(copiedPerson2);  //name: 'Max'



const hobbies = ['Spots', 'Cooking'];

const copiedArray = hobbies.slice(); //공백으로 slice
console.log(copiedArray);

const copiedArray2 = [hobbies];     //nested array
console.log(copiedArray2);

const copiedArray3 = [...hobbies];  //slice해서 하나씩 저장 (spread operator)
console.log(copiedArray3);



//Rest 파라미터: spread연산자 이용해 함수의 파라미터를 작성한 형태
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));  //() -> []

const toArray2 = (...args) => {
    return args;
};

console.log(toArray2(1, 2, 3, 4));  //하나씩 []에 저장

