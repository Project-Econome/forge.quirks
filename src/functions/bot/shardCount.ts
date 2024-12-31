import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$shardCount",
  version: '1.0.0',
  description: "Returns the total amount of shards.",
  output: ArgType.Number,
  unwrap: false,

  async execute(ctx) {
    const totalShards = ctx.client.ws.shards.size;
  
    return this.success(totalShards);
  },
});