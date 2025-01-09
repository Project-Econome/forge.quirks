import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$battery",
  version: '1.0.0',
  description: "Returns the whole battery info in a json.",
  output: ArgType.Json,
  unwrap: false,
  async execute(ctx) {
    const battery = await si.battery()
    return this.success(JSON.stringify(battery));
  },
});