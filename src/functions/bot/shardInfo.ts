import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { ShardInfo } from "../../types";
import { Status } from 'discord.js'

export default new NativeFunction({
  name: "$shardinfo",
  version: '1.0.0',
  description: "Returns the info on shard.",
  output: ArgType.Number,
  unwrap: true,
  args: [
    {
      name: 'shardID',
      description: 'The ID of the shard to retrieve.',
      type: ArgType.Number,
      required: false,
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
    let result: any = null;
    sid = sid !== undefined ? Number(sid) : 0;

    if (sid !== undefined) {
      const shard = ctx.client.ws.shards.get(sid);
      if (shard) {
        const guildCount = ctx.client.guilds.cache.filter(guild => guild.shardId === shard.id).size;

        shardInfo[shard.id] = {
          id: shard.id,
          status: Status[shard.status] || "Unknown",
          ping: shard.ping,
          lastPingTimestamp: shard.lastPingTimestamp,
          ready: shard.status === 0 ? 'true' : 'false',
          guildCount,
        };
        shardStack = shardInfo[shard.id];
      } else {
        result = 'Not available';
      }
    }

    switch (type) {
      case ShardInfo.id:
        result = shardStack?.id || "Not available";
        break;

      case ShardInfo.status:
        result = shardStack?.status || "Not available";
        break;

      case ShardInfo.guildcount:
        result = shardStack?.guildCount || "Not available";
        break;

      case ShardInfo.ping:
        result = shardStack?.ping || "Not available";
        break;

      case ShardInfo.lastPingTimestamp:
        result = shardStack?.lastPingTimestamp !== -1 ? shardStack?.lastPingTimestamp : "N/A";
        break;

      case ShardInfo.ready:
        result = shardStack?.ready || "Not available";
        break;

      default:
        result = JSON.stringify(shardStack) || { message: "Shard not found or invalid type" };
        break;
      }
    return this.success(result);
  },
});