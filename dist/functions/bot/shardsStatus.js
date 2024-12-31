"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$shardstatus",
    version: '1.0.0',
    description: "Returns the of all shards in a json format.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute(ctx) {
        const statusMap = {};
        ctx.client.ws.shards.forEach(shard => {
            statusMap[shard.id] = discord_js_1.Status[shard.status] || "Unknown";
        });
        return this.success(JSON.stringify(statusMap));
    },
});
//# sourceMappingURL=shardsStatus.js.map