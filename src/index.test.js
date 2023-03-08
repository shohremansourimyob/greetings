//const holdConsole = console;
import cli from '.';

it('console logs when cli is called', () => {
    const expected = 'I beg your pardon?'
    
    const response = cli('Hello');

    expect(response).toBe(expected);
});