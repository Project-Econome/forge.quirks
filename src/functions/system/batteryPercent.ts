import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$batteryPercent",
  version: '1.0.0',
  description: "Returns the percentage of the battery.",
  output: ArgType.String,
  unwrap: false,
  async execute(ctx) {
    const battery = await si.battery()
    return this.success(battery.percent + '%');
  },
});