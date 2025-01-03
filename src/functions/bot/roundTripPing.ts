import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { performance } from 'perf_hooks';
import { Routes } from 'discord.js'

export default new NativeFunction({
  name: "$roundtripping",
  aliases: ['$roundtrip'],
  version: '1.0.0',
  description: "Returns the total amount of shards.",
  output: ArgType.Number,
  unwrap: false,

  async execute(ctx) {
    const start = performance.now();
    let latency = null
    void await ctx.client.rest.get(Routes.user("@me"))
    const end = performance.now()
    latency = end - start
    return this.success(latency.toFixed(2));
  },
});