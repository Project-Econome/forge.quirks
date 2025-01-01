"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$guildIcon",
    version: "1.0.0",
    description: "Returns the server icon",
    brackets: false,
    aliases: [
        "$serverIcon"
    ],
    output: forgescript_1.ArgType.URL,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the guild icon",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Guild,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "Return Empty",
            description: "If no guildIcon return a default image.",
            rest: false,
            type: forgescript_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, size, ext, empty]) {
        let result = null;
        const guildIcon = (guild ?? ctx.guild)?.iconURL({
            extension: ext || undefined,
            size: size || 2048,
        });
        result = guildIcon;
        if (!guildIcon && empty === false) {
            result = "https://cdn.lynnux.xyz/images/No-Server_Icon-found.png";
        }
        return this.success(result);
    },
});
//# sourceMappingURL=guildIcon.js.map