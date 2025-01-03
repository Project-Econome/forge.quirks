"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getApplicationEmoji",
    version: "1.0.0",
    description: "Returns the server icon",
    brackets: false,
    output: forgescript_1.ArgType.Emoji,
    args: [
        {
            name: "emojiID",
            description: "The emojiID to retrieve icon",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Emoji,
        }
    ],
    unwrap: true,
    async execute(ctx, [emoji]) {
        const data = ctx.client.application.emojis.fetch(`${emoji}`);
        const name = (await data).name;
        const id = (await data).id;
        return this.success(`<:${name}:${id}>`);
    },
});
//# sourceMappingURL=getApplicationEmoji.js.map