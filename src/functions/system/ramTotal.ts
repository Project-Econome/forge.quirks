import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";
import { FileUnit } from "../../types";

export default new NativeFunction({
  name: "$ramtotal",
  aliases: ['$totalram'],
  version: '1.0.0',
  description: "Returns the total ram.",
  output: ArgType.String,
  brackets: false,
  unwrap: true,
  args: [
    {
      name: "return",
      description: "How to return the value (default MB).",
      rest: false,
      required: false,
      type: ArgType.Enum,
      enum: FileUnit
    }
  ],
  async execute(ctx, [unit]) {
    unit ??= FileUnit.MB
    const memory = await si.mem();
    const totalMemory = memory.total / (1024 ** (unit + 1));

    return this.success(totalMemory.toFixed(2) + FileUnit[unit] );
  },
});