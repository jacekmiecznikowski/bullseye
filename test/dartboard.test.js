import {test} from "node:test";
import assert from "node:assert/strict";
import {dartPosition,dartboard} from "../src/dartboard.js";
const distance=p=>Math.hypot(p.x-180,p.y-180);
test("better scores land closer to bullseye",()=>{for(let i=0;i<7;i++){const distances=[0,10,15,30,55,60,85,100].map(p=>distance(dartPosition(p,i)));assert.ok(distances.every((d,j)=>j===0||d<distances[j-1]));assert.ok(distances.at(-1)<13);assert.ok(distances[0]>130)}});
test("seven unique bullseye points",()=>{const p=Array.from({length:7},(_,i)=>dartPosition(100,i));assert.equal(new Set(p.map(v=>v.x.toFixed(4)+","+v.y.toFixed(4))).size,7)});
test("all darts independently labelled",()=>{const svg=dartboard(Array.from({length:7},(_,i)=>({points:i===0?0:100})),true);assert.equal((svg.match(/data-dart=/g)||[]).length,7);assert.equal((svg.match(/class="dart-mark fresh"/g)||[]).length,1);assert.ok(svg.includes("Rzut 1, 0 punktów"));assert.ok(svg.includes("Rzut 7, 100 punktów"))});
