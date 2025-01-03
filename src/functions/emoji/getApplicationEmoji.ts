import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
  name: "$getApplicationEmoji",
  version: "1.0.0",
  description: "Returns the server icon",
  brackets: false,
  output: ArgType.Emoji,
  args: [
    {
      name: "emojiID",
      description: "The emojiID to retrieve icon",
      rest: false,
      required: true,
      type: ArgType.Emoji,
    }
  ],
  unwrap: true,
  async execute(ctx, [emoji]) {
    const data = ctx.client.application.emojis.fetch(`${emoji}`)
    const name = (await data).name
    const id = (await data).id
    return this.success(`<:${name}:${id}>`)
  },
})