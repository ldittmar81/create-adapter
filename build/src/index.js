"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAdapter_1 = require("./lib/createAdapter");
const questions_1 = require("./lib/questions");
async function createAdapter(answers, disableValidation = []) {
    // Check all answers
    questions_1.checkAnswers(answers);
    answers = await questions_1.formatAnswers(answers);
    await questions_1.validateAnswers(answers, disableValidation);
    // Create files
    return createAdapter_1.createFiles(answers);
}
exports.createAdapter = createAdapter;
