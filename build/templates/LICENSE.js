"use strict";
const tools_1 = require("../src/lib/tools");
module.exports = (answers => {
    return answers.license
        && answers.license.text
        && tools_1.formatLicense(answers.license.text, answers)
        || "TODO: enter license text here";
});
