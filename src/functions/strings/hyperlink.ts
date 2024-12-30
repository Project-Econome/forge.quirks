import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
  name: "$hyperlink",
  version: '1.0.0',
  description: "Return the a text with a link in discord hyperlink markdown.",
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
    },
    {
      name: "link",
      description: "link to make the text go to.",
      rest: false,
      required: true,
      type: ArgType.String
    }
  ],

  async execute(ctx, [text, link]) {
    return this.success(`[${text}](${link})`);
  },
});