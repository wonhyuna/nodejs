const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

//asynchrony code
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData()
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);  //시간 차이를 만듦 -> 다른 것 먼저 실행되고 나중에 실행될 수도 있음

console.log('Hello!');
console.log('Hi!');
