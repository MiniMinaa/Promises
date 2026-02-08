
const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const outcome =Math.random() > 0.5;
        outcome ? resolve("You win!") : reject("You lose!")
    });
}

const result = async () => {
    try {
        const value = await flipCoin();
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}

//part 2 fetching data from an API

type AdviceResponse = {
    slip:{
        id: number;
        advice: string;
    };
};

const fetchAdviceById = async (id: string) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        if (!response.ok) {
            throw new Error("network response was not ok");
        }
        const data = await response.json();
        const advice = data.slip.advice;
        console.log (`Advice(ID: ${id}): ${advice}`);
    }   catch (error) {
        console.log(error);
    }
 }

const flipCoinResult = async () => {
    try {
        const result = await flipCoin();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
//bonus
flipCoinResult();