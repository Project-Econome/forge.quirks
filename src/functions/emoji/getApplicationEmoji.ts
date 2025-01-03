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
      type: ArgType.String,
    }
  ],
  unwrap: true,
  async execute(ctx, [emoji]) {
    let name = 'name'
    let id = 1122334455667788990;
    try {
      const data = ctx.client.application.emojis.fetch(`${emoji}`)
      const name = (await data).name
      const id = (await data).id
    } catch (err) {
      if (err instanceof Error) {
        return this.error(err)
      }
    }
    return this.success(`<:${name}:${id}>`)
  },
})