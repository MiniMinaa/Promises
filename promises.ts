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

type AdviceResponse = {
    slip:{
        id: number;
        advice: string;
    };
};

const fetchAdviceById = (id: number) => {
    //logic
    const promise: Promise<void> = fetch(
        `https://api.adviceslip.com/advice/${id}`
    ) // fetching from this adress
    .then ((response: Response) => { //this returns the promise
        if (!response.ok) {
            throw new Error("network response was not ok");
        }
        return response.json() as Promise<AdviceResponse>;
    })
    .then((data: AdviceResponse) => {
        const advice: string = data.slip.advice;
        console.log(`Àdvice (ID: $(id)): ${advice}`);
    })
    .catch((error: unknown) => {
        console.error("Error fetching advive:", error);
    });
};
fetchAdviceById(1)

//bonus
