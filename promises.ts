//part 1 create your own promise
//const myPromise = new Promise((resolve, reject) => { //i've created a variable called myPromise and it has a function attatched to it

const flipCoin = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const result = Math.random();

        if (result > 0.5) {
            resolve("You win!");
        } else {
            reject("You Lose!");
        }
    });
};

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
        console.log(`Àdvice (ID: ${id}): ${data.slip.advice}`);
    })
    .catch((error: unknown) => {
        console.error("Error fetching advive:", error);
    });
};

flipCoin()
    .then((message: string) => {
        console.log(message);
        return fetchAdviceById(1);
    })
    .catch((error: string) => {
        console.log(error)
    });
//bonus
