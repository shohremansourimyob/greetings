#!/usr/bin/env node

import cli from "../src/index.js";
import readline from "readline";
import { coolOpeningFeatureIsOn, CoolOpenings } from "../src/feature-toggles.js";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("> ");
rl.prompt();

rl.on("line", (line) => {
  if (line === "exit") {
    rl.close();
    return;
  }
  console.log(">> " + cli(line.toString().trim(), coolOpeningFeatureIsOn(CoolOpenings)));
  rl.prompt();
});

rl.on("close", () => {
  console.log("Goodbye!");
  process.exit(0);
});
