import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$batteryAvailable",
  aliases: ['$hasBattery'],
  version: '1.0.0',
  description: "Returns if the battery is available.",
  output: ArgType.Boolean,
  unwrap: false,
  async execute(ctx) {
    const battery = await si.battery()
    return this.success(battery.hasBattery);
  },
});