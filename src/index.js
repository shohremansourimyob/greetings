import greet from './opening/greet';
import weather from './small-talk/weather';

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