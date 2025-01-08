import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$batteryTimeRemaining",
  aliases: ['$batteryUntilEmpty'],
  version: '1.0.0',
  description: "Returns the minutes left until empty (linux and mac only).",
  output: ArgType.Number,
  unwrap: false,
  async execute(ctx) {
    const battery = await si.battery()
    return this.success(battery.timeRemaining);
  },
});