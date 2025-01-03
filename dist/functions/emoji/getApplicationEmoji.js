"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$getApplicationEmoji",
    version: "1.0.0",
    description: "Returns an application emote",
    brackets: false,
    output: forgescript_1.ArgType.Emoji,
    args: [
        {
            name: "emojiID",
            description: "The emojiID to retrieve icon",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        }
    ],
    unwrap: true,
    async execute(ctx, [emoji]) {
        let name = null;
        let animated = null;
        let result = null;
        try {
            const data = ctx.client.application.emojis.fetch(`${emoji}`);
            animated = (await data).animated;
            name = (await data).name;
        }
        catch (err) {
            if (err instanceof Error) {
                return this.error(err);
            }
        }
        return this.success(animated ? `<a:${name}:${emoji}>` : `<:${name}:${emoji}>`);
    },
});
//# sourceMappingURL=getApplicationEmoji.js.map