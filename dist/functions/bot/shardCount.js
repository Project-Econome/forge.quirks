"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$shardCount",
    version: '1.0.0',
    description: "Returns the total amount of shards.",
    output: forgescript_1.ArgType.Number,
    unwrap: false,
    async execute(ctx) {
        const totalShards = ctx.client.options.shardCount;
        return this.success(totalShards);
    },
});
//# sourceMappingURL=shardCount.js.map