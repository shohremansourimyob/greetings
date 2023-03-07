import hello from "./hello";
import pleasantry from "./pleasantry";

const greet = () => {
    const helloStateent = hello();

    const greetStatement = helloStateent;
    const pleasantryStatement = pleasantry();

    return `${greetStatement}! ${pleasantryStatement}`;
}

export default greet;