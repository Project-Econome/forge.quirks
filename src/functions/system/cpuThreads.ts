import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"
import si from "systeminformation";

export default new NativeFunction({
  name: "$cpuCores",
  version: "1.0.7",
  output: ArgType.Number,
  description: "Returns the amount of cpu cores",
  unwrap: false,
  async execute(ctx) {
    const cpu = await si.cpu()
    return this.success(cpu.cores)
  },
}) 