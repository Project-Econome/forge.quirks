import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";
import { FileUnit } from "../../types";

export default new NativeFunction({
  name: "$ramtotal",
  version: '1.0.0',
  description: "Returns the total ram (in GB).",
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
    const memory = await si.mem();
    const totalMemory = memory.total;
    let result = 'N/A'

    switch (unit) {
      case FileUnit.KB:
        result = (totalMemory / 1024).toFixed(2) + " KB";
      case FileUnit.MB:
        result =  (totalMemory / (1024 * 1024)).toFixed(2) + " MB";
      case FileUnit.GB:
        result =  (totalMemory / (1024 * 1024 * 1024)).toFixed(2) + " GB";
      case FileUnit.B:
      default:
        result =  totalMemory.toFixed(2) + " B";
    }

    return this.success(result);
  },
});