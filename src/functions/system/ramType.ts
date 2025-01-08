import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$ramType",
  aliases: ['$memoryType'],
  version: '1.0.0',
  description: "Returns the ram type.",
  output: ArgType.String,
  brackets: false,
  unwrap: false,

  async execute(ctx) {
    const memory = await si.memLayout();
    const type = memory[0].type;
    return this.success(type);
  },
});