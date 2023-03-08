import hello from "./hello";
import pleasantry from "./pleasantry";

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