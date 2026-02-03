//part 1 create your own promise
const myPromise = new Promise((resolve, reject) =>{ //i've created a variable called myPromise and it has a function attatched to it
    //logic
    let success = true; //operation will be successful bc its true

    if (success) { //the logic goes here
        resolve("operation was successful!");
    } else {
        reject("operation failed");
    }
});

myPromise // here im using the promise that already started running when it was created
.then((message) => {
    console.log(message);
    //logic
})
.catch((error) => {
    console.log(error);
    //logic
})

//part 2 fetching data from an API


//bonus
