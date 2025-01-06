"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$checkIs",
    version: "1.0.0",
    output: forgescript_1.ArgType.Boolean,
    description: "Checks whether a string is equal to a set of other strings",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to check on",
            required: true,
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "matches",
            description: "The list of strings to try match",
            rest: true,
            type: forgescript_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [text, matches]) {
        return this.success(matches.some((x) => text === x));
    },
});
//# sourceMappingURL=checkIs.js.map