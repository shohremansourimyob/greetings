import hello from "./hello.js";
import pleasantry from "./pleasantry.js";

const normalGreeting = () => {
    const helloStateent = hello();

    const greetStatement = helloStateent;
    const pleasantryStatement = pleasantry();

    return `${greetStatement}! ${pleasantryStatement}`;
}

const greet = (inputGreet) => {
    if (inputGreet === 'Hello') {
        return normalGreeting();
    }

    return null;
}

export default greet;