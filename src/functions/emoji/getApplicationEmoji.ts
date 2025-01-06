import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$getApplicationEmoji",
  version: "1.0.0",
  description: "Returns an application emote",
  brackets: false,
  output: ArgType.Emoji,
  args: [
    {
      name: "emojiID",
      description: "The emojiID to retrieve icon",
      rest: false,
      required: true,
      type: ArgType.String,
    }
  ],
  unwrap: true,
  async execute(ctx, [emoji]) {
    let name = null; let animated = null; let result = null;
    try {
      const data = await ctx.client.application.emojis.fetch(emoji);
      animated = data.animated;
      name = data.name;
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err)
      }
    }
    return this.success(animated ? `<a:${name}:${emoji}>` : `<:${name}:${emoji}>`);
  },
})