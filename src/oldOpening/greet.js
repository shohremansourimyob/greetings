import hello from "./hello.js";
import pleasantry from "./pleasantry.js";

const normalGreeting = () => {
    const helloStatement = hello();
    const pleasantryStatement = pleasantry();

    return `${helloStatement}! ${pleasantryStatement}`;
};

const greet = (inputGreet) => {
    if (inputGreet === "Hello") {
        return normalGreeting();
    }

    return null;
};

export default greet;