import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$cpuTemp",
  version: '1.0.0',
  description: "Returns the cpu temperature.",
  output: ArgType.Number,
  unwrap: false,

  async execute() {
    const cpuTemp = await si.cpuTemperature();
    return this.success(cpuTemp);
  },
});