//const holdConsole = console;
import cli from '.';

it('console logs when cli is called', () => {
    var a;

   // console.log = (input) => holdConsole.log(input); 
    cli('Hello');

   // expect(a).toBe('Hello');
});