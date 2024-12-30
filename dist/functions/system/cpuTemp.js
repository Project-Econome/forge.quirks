"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$cpute",
    version: '1.0.0',
    description: "Returns the cpu usage of the process.",
    output: forgescript_1.ArgType.Number,
    brackets: false,
    unwrap: false,
    async execute() {
        return this.success('te');
    },
});
//# sourceMappingURL=cpuTemp.js.map