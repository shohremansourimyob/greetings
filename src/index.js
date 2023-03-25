import oldGreet from "./oldOpening/greet.js";
import greet from "./opening/greet.js";
import weather from "./small-talk/weather.js";

export const unknownGreeting = () => {
    return "I beg your pardon?";
};

const cli = (input, coolOpeningFeatureIsOn) => {
    var opening;

    if (coolOpeningFeatureIsOn) { opening = greet(input); }
    else { opening = oldGreet(input); }

    if (opening) return opening;

    const smallTalk = weather(input);
    if (smallTalk) return smallTalk;

    return unknownGreeting();
};

export default cli;