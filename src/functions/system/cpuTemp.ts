import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$cpuTemp",
  aliases: ['$cpuTemperature'],
  version: '1.0.0',
  description: "Returns the cpu temperature in celsius.",
  output: ArgType.Number,
  unwrap: false,

  async execute() {
    const cpuTemp = await si.cpuTemperature();
    const mainTemp = cpuTemp.main;

    return this.success(mainTemp + '°C');
  },
});