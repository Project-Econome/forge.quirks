import { ArgType, NativeFunction } from "@tryforge/forgescript";
import pidusage from "pidusage";

export default new NativeFunction({
  name: "$cpuUsage",
  version: '1.0.0',
  description: "Returns the cpu usage of the process.",
  output: ArgType.Number,
  unwrap: true,
  args: [
    {
      name: "singleCore",
      description: "If true show the usage on a single core.",
      rest: false,
      required: false,
      type: ArgType.Boolean
    }
  ],

  async execute(ctx, [single]) {
    const stats = pidusage(process.pid)
    const cpuUsage = (await stats).cpu.toFixed(2)
  return this.success(cpuUsage)
},
});