import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";

export default new NativeFunction({
  name: "$ramType",
  aliases: ['$memoryType'],
  version: '1.0.0',
  description: "Returns the ram type.",
  output: ArgType.String,
  unwrap: false,

  async execute(ctx) {
    const memory = await si.memLayout();
    console.log(memory);
    if (!memory || memory.length === 0) {
      console.log("Unable to retrieve memory layout information.");
    }

    return this.success(memory[0]?.type || "Unknown memory type");
  },
});