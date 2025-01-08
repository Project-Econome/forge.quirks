import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$osDistro",
  aliases: ['$distro'],
  version: '1.0.0',
  description: "Returns the operating system distro usage.",
  output: ArgType.String,
  unwrap: false,

  async execute(ctx) {
    let result = 'Check console'
    const system = si.osInfo()
    console.log(system)
    return this.success(result);
  },
});