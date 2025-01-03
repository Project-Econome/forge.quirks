"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const perf_hooks_1 = require("perf_hooks");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$roundtripping",
    aliases: ['$roundtrip'],
    version: '1.0.0',
    description: "Returns the total amount of shards.",
    output: forgescript_1.ArgType.Number,
    unwrap: false,
    async execute(ctx) {
        const start = perf_hooks_1.performance.now();
        let latency = null;
        void await ctx.client.rest.get(discord_js_1.Routes.user("@me"));
        const end = perf_hooks_1.performance.now();
        latency = end - start;
        return this.success(latency);
    },
});
//# sourceMappingURL=roundTripPing.js.map