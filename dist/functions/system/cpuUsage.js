"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const pidusage_1 = __importDefault(require("pidusage"));
exports.default = new forgescript_1.NativeFunction({
    name: "$cpuUsage",
    version: '1.0.0',
    description: "Returns the cpu usage of the process.",
    output: forgescript_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "singleCore",
            description: "If true show the usage on a single core.",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Boolean
        }
    ],
    async execute(ctx, [single]) {
        const stats = (0, pidusage_1.default)(process.pid);
        const cpuUsage = (await stats).cpu.toFixed(2);
        return this.success(cpuUsage);
    },
});
//# sourceMappingURL=cpuUsage.js.map