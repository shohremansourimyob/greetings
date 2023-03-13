import greet from "./opening/greet.js";
import weather from "./small-talk/weather.js";
import * as FeatureToggles from "./feature-toggles.js";

export const unknownGreeting = () => {
    return "I beg your pardon?";
};

const cli = (input) => {

    const opening = greet(input, FeatureToggles.CoolOpenings);
    if (opening) return opening;

    const smallTalk = weather(input);
    if (smallTalk) return smallTalk;

    return unknownGreeting();
};

export default cli;