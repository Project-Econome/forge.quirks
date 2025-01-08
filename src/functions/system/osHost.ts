import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$osHost",
  version: '1.0.0',
  description: "Returns the operating system host usage.",
  output: ArgType.String,
  unwrap: false,
  async execute(ctx) {
    const system = await si.osInfo()
    return this.success(system.hostname + "@" + system.fqdn);
  },
});