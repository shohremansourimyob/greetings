import hello from "./hello.js";
import pleasantry from "./pleasantry.js";

const normalGreeting = (coolOpening) => {
    const helloStatement = hello(coolOpening);
    const pleasantryStatement = pleasantry(coolOpening);

    return `${helloStatement} ${pleasantryStatement}`;
};

const greet = (inputGreet, coolOpening) => {
    if (inputGreet === "Hello") {
        return normalGreeting(coolOpening);
    }

    return null;
};

export default greet;