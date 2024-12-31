import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { Status } from 'discord.js'

export default new NativeFunction({
  name: "$shardstatus",
  version: '1.0.0',
  description: "Returns the of all shards in a json format.",
  output: ArgType.String,
  unwrap: false,

  async execute(ctx) {
    const statusMap: Record<number, string> = {};
  
    ctx.client.ws.shards.forEach(shard => {
      statusMap[shard.id] = Status[shard.status] || "Unknown";
    });
  
    return this.success(JSON.stringify(statusMap));
  },
});