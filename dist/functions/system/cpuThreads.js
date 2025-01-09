"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$cpuThreads",
    version: "1.0.7",
    output: forgescript_1.ArgType.Number,
    description: "Returns the amount of cpu Threads",
    unwrap: false,
    async execute(ctx) {
        const cpu = await systeminformation_1.default.cpu();
        return this.success(cpu.cores);
    },
});
//# sourceMappingURL=cpuThreads.js.map