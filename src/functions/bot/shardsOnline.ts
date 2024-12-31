import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { Status } from 'discord.js';

export default new NativeFunction({
  name: "$shardsOnline",
  version: '1.0.0',
  description: "Returns the total amount of online shards.",
  output: ArgType.Number,
  unwrap: false,

  async execute(ctx) {
    const onlineShards = ctx.client.ws.shards.filter(shard => shard.status === Status.Ready).size;
  
    return this.success(onlineShards);
  },
});