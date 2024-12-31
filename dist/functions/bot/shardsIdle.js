"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$shardsIdle",
    version: '1.0.0',
    description: "Returns the total amount of idle shards.",
    output: forgescript_1.ArgType.Number,
    unwrap: false,
    async execute(ctx) {
        const onlineShards = ctx.client.ws.shards.filter(shard => shard.status === discord_js_1.Status.Idle).size;
        return this.success(onlineShards);
    },
});
//# sourceMappingURL=shardsIdle.js.map