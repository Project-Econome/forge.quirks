import { ArgType, NativeFunction } from "@tryforge/forgescript";
import pidusage from "pidusage";
import si from "systeminformation";
import os from 'os';

export default new NativeFunction({
  name: "$ram",
  aliases: ['$ramUsage','$memory','$memoryUsage'],
  version: '1.0.0',
  description: "Returns the ram usage.",
  output: ArgType.String,
  brackets: false,
  unwrap: true,
  args: [
    {
      name: "percentage",
      description: "If true return value in percentage else show in MB.",
      rest: false,
      required: false,
      type: ArgType.Boolean
    },
    {
      name: "system",
      description: "If true show system usage else show process usage.",
      rest: false,
      required: false,
      type: ArgType.Boolean
    }
  ],

  async execute(ctx, [type, system]) {
    let result = null
    if (type) {
      if (system) {
        const memory = await si.mem();
        const activeMemory = memory.used - memory.buffcache;
        const systemMemoryPercentage = (activeMemory / memory.total) * 100;
        result = `${systemMemoryPercentage.toFixed(2)}%`
      } else {
        const stats = await pidusage(process.pid);
        const memory = await si.mem();
        const memoryUsage = (stats.memory / memory.total) * 100;
        const memoryUsed = memoryUsage.toFixed(2);
        result = `${memoryUsed}%`
      };
    } else {
      if (system) {
        const memory = await si.mem();
        const memoryUsage = memory.used;
        const memoryUsageMB = memoryUsage / (1024 * 1024);
        result = `${memoryUsageMB.toFixed(2)} MB`
      } else {
        const stats = await pidusage(process.pid);
        const memoryUsage = stats.memory / (1024 * 1024);
        result = `${memoryUsage.toFixed(2)} MB`

      };
    };
    return this.success(result);
  },
});