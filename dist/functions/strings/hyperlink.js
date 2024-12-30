"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hyperlink",
    version: '1.0.0',
    description: "Return the a text with a link in discord hyperlink markdown.",
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
        },
        {
            name: "link",
            description: "link to make the text go to.",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String
        },
        {
            name: "embed",
            description: "Show embeds.",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.String
        }
    ],
    async execute(ctx, [text, link, embed]) {
        const result = embed
            ? `[${text}](${link})`
            : `[${text}](<${link}>)`;
        return this.success(result);
    },
});
//# sourceMappingURL=hyperlink.js.map