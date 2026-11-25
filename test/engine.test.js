import {test} from "node:test";import assert from "node:assert/strict";import {normalize,answer,score,deck,streak,day} from "../src/engine.js";import {questions} from "../src/questions.js";
test("Polish aliases",()=>{assert.equal(normalize(" ŁÓDŹ! "),"lodz");assert.equal(answer(questions[1],"Fe").names[0],"żelazo")});
test("stable seven unique questions",()=>{const a=deck(questions,"2026-11-25");assert.equal(new Set(a.map(q=>q.id)).size,7);assert.deepEqual(a,deck(questions,"2026-11-25"))});
test("scoring",()=>{assert.equal(score({tier:4},"nisza"),100);assert.equal(score(null,"radar"),0)});
test("Warsaw date and streak",()=>{assert.equal(day(new Date("2026-11-24T23:30:00Z")),"2026-11-25");assert.equal(streak([{kind:"daily",date:"2026-11-24"}],"2026-11-25"),1)});
test("valid bank",()=>{for(const q of questions){assert.ok(q.answers.length>=3);assert.ok(q.answers.every(a=>a.tier>=0&&a.tier<5));const names=q.answers.flatMap(a=>a.names.map(normalize));assert.equal(new Set(names).size,names.length)}});
