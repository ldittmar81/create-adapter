"use strict";
const templateFunction = (answers) => {
    return Buffer.from("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", "base64");
};
templateFunction.customPath = (answers) => `admin/${answers.adapterName}.png`;
templateFunction.noReformat = true; // Don't format binary files
module.exports = templateFunction;
