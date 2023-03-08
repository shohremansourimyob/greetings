#!/usr/bin/env node
import cli from "../src/index.js";

var stdin = process.openStdin();

stdin.addListener("data", d => {
    console.log("> " +
        cli(d.toString().trim()));
});
