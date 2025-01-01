"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const types_1 = require("../../types");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$shardinfo",
    version: '1.0.0',
    description: "Returns the info on shard.",
    output: forgescript_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: 'shardID',
            description: 'The ID of the shard to retrieve.',
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        },
        {
            name: 'type',
            description: 'type to retrieve.',
            type: forgescript_1.ArgType.Enum,
            enum: types_1.ShardInfo,
            required: true,
            rest: false
        }
    ],
    async execute(ctx, [sid, type]) {
        const shardInfo = {};
        let shardStack = null;
        let result = null;
        if (sid !== undefined) {
            const shard = ctx.client.ws.shards.get(sid);
            if (shard) {
                const guildCount = ctx.client.guilds.cache.filter(guild => guild.shardId === shard.id).size;
                shardInfo[shard.id] = {
                    id: shard.id,
                    status: discord_js_1.Status[shard.status] || "Unknown",
                    ping: shard.ping,
                    lastPingTimestamp: shard.lastPingTimestamp,
                    ready: shard.status === 0 ? 'Ready' : 'Not Ready',
                    guildCount,
                };
                shardStack = shardInfo;
            }
            else {
                result = 'Not available';
            }
        }
        console.log(shardStack);
        switch (type) {
            case types_1.ShardInfo.id:
                result = shardInfo.id;
            case types_1.ShardInfo.status:
                result = shardInfo.status;
            case types_1.ShardInfo.guildcount:
                result = shardInfo.guildcount;
            case types_1.ShardInfo.ping:
                result = shardInfo.ping;
            case types_1.ShardInfo.lastPingTimestamp:
                result = shardInfo.lastPingTimestamp;
            case types_1.ShardInfo.ready:
                result = shardInfo.ready;
            default:
                result = { id: shardInfo.id, status: shardInfo.status, guildcount: shardInfo.guildcount, ping: shardInfo.ping, lastPingTimestamp: shardInfo.lastPingTimestamp, ready: shardInfo.ready };
        }
        return this.success(result);
    },
});
//# sourceMappingURL=shardInfo.js.map