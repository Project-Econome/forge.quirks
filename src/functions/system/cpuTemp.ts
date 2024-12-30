import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$cpute",
  version: '1.0.0',
  description: "Returns the cpu usage of the process.",
  output: ArgType.Number,
  brackets: false,
  unwrap: false,

  async execute() {
    return this.success('te');
  },
});