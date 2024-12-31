"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
//@ts-nocheck
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$dbping",
    aliases: ['$dblatency'],
    version: '1.0.0',
    description: "Returns the database ping.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute(ctx) {
        let identifier = 'user_test_scope';
        let result = NaN;
        const start = Date.now();
        try {
            await ctx.client.db.get({ identifier });
            const end = Date.now();
            result = end - start;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error reading package.json:', error.message);
            }
            else {
                console.error('Error fetching data:', error);
            }
        }
        return this.success(`${result}ms`);
    },
});
//# sourceMappingURL=dbping.js.map