import hello from "./hello.js";
import pleasantry from "./pleasantry.js";

const normalGreeting = () => {
    const helloStatement = hello();

    const greetStatement = helloStatement;
    const pleasantryStatement = pleasantry();

    return `${greetStatement}! ${pleasantryStatement}`;
};

const greet = (inputGreet) => {
    if (inputGreet === "Hello") {
        return normalGreeting();
    }

    return null;
};

export default greet;