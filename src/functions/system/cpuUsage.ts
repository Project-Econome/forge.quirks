import { ArgType, NativeFunction } from "@tryforge/forgescript";
import pidusage from "pidusage";
import os from "os";

export default new NativeFunction({
  name: "$cpuUsage",
  version: '1.0.0',
  description: "Returns the cpu usage of the process.",
  output: ArgType.Number,
  brackets: false,
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
    const stats = pidusage(process.pid);
    const totalCores = os.cpus().length;

    const cpuUsage = single
      ? (await stats).cpu.toFixed(2)
      : (((await stats).cpu / totalCores).toFixed(2));

    return this.success(cpuUsage)
  },
});