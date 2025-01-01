import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { ShardInfo } from "../../types";
import { Status } from 'discord.js'

export default new NativeFunction({
  name: "$shardinfo",
  version: '1.0.0',
  description: "Returns the info on shard.",
  output: ArgType.Number,
  brackets: true,
  unwrap: true,
  args: [
    {
      name: 'shardID',
      description: 'The ID of the shard to retrieve.',
      type: ArgType.Number,
      required: true,
      rest: false
    },
    {
      name: 'type',
      description: 'type to retrieve.',
      type: ArgType.Enum,
      enum: ShardInfo,
      required: false,
      rest: false
    }
  ],

  async execute(ctx, [sid, type]) {
    const shardInfo: Record<string, any> = {};
    let shardStack = null
    let result = null

    if (sid !== undefined) {
      const shard = ctx.client.ws.shards.get(sid);
      if (shard) {
        const guildCount = ctx.client.guilds.cache.filter(guild => guild.shardId === shard.id).size;

        shardInfo[shard.id] = {
          id: shard.id,
          status: Status[shard.status] || "Unknown",
          ping: shard.ping,
          lastPingTimestamp: shard.lastPingTimestamp,
          ready: shard.status === 0 ? 'Ready' : 'Not Ready',
          guildCount,
        };
        shardStack = shardInfo;
      } else {
        result = 'Not available';
      }
    }

    console.log(shardStack)
    switch (type) {
      case ShardInfo.id:
        result = shardInfo.id;

      case ShardInfo.status:
        result = shardInfo.status;

      case ShardInfo.guildcount:
        result = shardInfo.guildcount;

      case ShardInfo.ping:
        result = shardInfo.ping;

      case ShardInfo.lastPingTimestamp:
        result = shardInfo.lastPingTimestamp;

      case ShardInfo.ready:
        result = shardInfo.ready

      default:
        result = { id: shardInfo.id, status: shardInfo.status, guildcount: shardInfo.guildcount, ping: shardInfo.ping, lastPingTimestamp: shardInfo.lastPingTimestamp, ready: shardInfo.ready}
    }
    return this.success(result);
  },
});