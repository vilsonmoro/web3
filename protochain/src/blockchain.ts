import Block from "./lib/block";

const block1 = new Block(-1, "a")
//block1.index = 2
//block1.hash = "a"

console.log(block1.isValid())