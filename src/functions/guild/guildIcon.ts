import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"
import { ImageExtension, ImageSize } from "discord.js"

export default new NativeFunction({
  name: "$guildIcon",
  version: "1.0.0",
  description: "Returns the server icon",
  brackets: false,
  aliases: [
    "$serverIcon"
  ],
  output: ArgType.URL,
  args: [
    {
      name: "guild ID",
      description: "The guild to retrieve the guild icon",
      rest: false,
      required: true,
      type: ArgType.Guild,
    },
    {
      name: "size",
      description: "The size to use for the image",
      rest: false,
      type: ArgType.Number,
    },
    {
      name: "extension",
      description: "The extension to use for the image",
      rest: false,
      type: ArgType.String,
    },
    {
      name: "Return Empty",
      description: "If no guildIcon return a default image.",
      rest: false,
      type: ArgType.Boolean,
    },
  ],
  unwrap: true,
  execute(ctx, [guild, size, ext, empty]) {
    let result = null;

    const guildIcon = (guild ?? ctx.guild)?.iconURL({
      extension: (ext as ImageExtension) || undefined,
      size: (size as ImageSize) || 2048,
    });
    result = guildIcon;

    if (!guildIcon && empty === false) {
      result = "https://cdn.lynnux.xyz/images/No-Server_Icon-found.png";
    }

    return this.success(result)
  },
})