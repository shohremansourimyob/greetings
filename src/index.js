import oldGreet from "./oldOpening/greet.js";
import greet from "./opening/greet.js";
import weather from "./small-talk/weather.js";

export const unknownGreeting = () => {
    return "I beg your pardon?";
};

const cli = (input, coolOpeningFeatureIsOn) => {
    var hello;

    if (coolOpeningFeatureIsOn) { hello = greet(input); }
    else { hello = oldGreet(input); }

    if (hello) return hello;

    const smallTalk = weather(input);
    if (smallTalk) return smallTalk;

    return unknownGreeting();
};

export default cli;