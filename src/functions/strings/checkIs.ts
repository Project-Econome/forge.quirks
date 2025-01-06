import { ArgType, NativeFunction, Return } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$checkIs",
    version: "1.0.0",
    output: ArgType.Boolean,
    description: "Checks whether a string is equal to a set of other strings",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to check on",
            required: true,
            rest: false,
            type: ArgType.String,
        },
        {
            name: "matches",
            description: "The list of strings to try match",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [text, matches]) {
        return this.success(matches.some((x) => text === x));
    },
})