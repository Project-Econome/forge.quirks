import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$bold",
  version: '1.0.0',
  description: "Return the text in discord bold markdown.",
  output: ArgType.String,
  brackets: true,
  unwrap: true,
  args: [
    {
      name: "text",
      description: "Text to return.",
      rest: false,
      required: true,
      type: ArgType.String
    }
  ],

  async execute(ctx, [text]) {
    return this.success(`**${text}**`);
  },
});