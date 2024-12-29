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
    const totalCores = os.cpus().length;
    const sampleCount = 3;
    const interval = 100;
    const samples = [];

    for (let i = 0; i < sampleCount; i++) {
      const stats = await pidusage(process.pid);
      const rawCpu = stats.cpu;

      if (rawCpu >= 0 && rawCpu <= 100) {
        samples.push(single ? rawCpu : rawCpu / totalCores);
      }

      if (i < sampleCount - 1) await new Promise((resolve) => setTimeout(resolve, interval));
    }

    const sortedSamples = [...samples].sort((a, b) => a - b);
    const median = sortedSamples[Math.floor(sortedSamples.length / 2)];

    const filteredSamples = samples.filter((val) => val <= median * 1.5);

    const averageCpuUsage = filteredSamples.length
      ? (filteredSamples.reduce((sum, val) => sum + val, 0) / filteredSamples.length).toFixed(2)
      : "0.00";

    return this.success(averageCpuUsage);
  },
});