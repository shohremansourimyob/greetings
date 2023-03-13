import { spawn } from "child_process";

describe("CLI", () => {
    it("should greet the user", (done) => {
        const child = spawn("node", ["bin/greetings.js"], { stdio: ["pipe", "pipe", "inherit"] });

        const commands = ["Hello", "Mumble mumble", "Nice weather today!", "exit"];
        let output = "";

        child.stdout.on("data", (data) => {
            output += data.toString();
        });

        child.on("close", (code) => {
            // console.log(output);
            expect(code).toBe(0);
            expect(output).toBe(
                "> >> Hi! How are you?\n" +
                "> >> I beg your pardon?\n"+
                "> >> It's beautiful.\n"+
                "> Goodbye!\n");
            done();
        });

        commands.forEach((command) => {
            child.stdin.write(`${command}\n`);
        });
    });
});
