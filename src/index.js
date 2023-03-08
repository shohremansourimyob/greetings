import greet from './opening/greet.js';
import weather from './small-talk/weather.js';

export const unknownGreeting = () => {
    return 'I beg your pardon?';
} 

const cli = (input) => {
    const hello = greet(input);
    if (!!hello) return hello;

    const smallTalk = weather(input);
    if (!!smallTalk) return smallTalk;

    return unknownGreeting();
}

export default cli;