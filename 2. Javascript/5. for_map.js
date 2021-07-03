const hobbies = ['Spots', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
} //hobbies를 하나씩

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//[ 'Hobby: Spots', 'Hobby: Cooking' ]
console.log(hobbies);
//[ 'Spots', 'Cooking' ]
