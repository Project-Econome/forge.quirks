"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$italic",
    version: '1.0.0',
    description: "Return the text in discord italic markdown.",
    output: forgescript_1.ArgType.String,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "Text to return.",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        }
    ],
    async execute(ctx, [text]) {
        return this.success(`*${text}*`);
    },
});
//# sourceMappingURL=italic.js.map