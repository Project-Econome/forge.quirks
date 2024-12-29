import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

interface CpuTemperatureInfo {
  main: number;
  cores: number[];
  max: number;
  socket: number[];
  chipset: number;
}

export default new NativeFunction({
  name: "$cpuTemperature",
  version: '1.0.0',
  description: "Returns the cpu temperature.",
  output: ArgType.Number,
  brackets: false,
  unwrap: false,
  async execute() {
    const cpuTemp = await si.cpuTemperature()
    return this.success(cpuTemp);
  },
});