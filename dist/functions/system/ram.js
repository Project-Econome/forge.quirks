"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const pidusage_1 = __importDefault(require("pidusage"));
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$ram",
    aliases: ['$ramUsage'],
    version: '1.0.0',
    description: "Returns the ram usage.",
    output: forgescript_1.ArgType.String,
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "percentage",
            description: "If true return value in percentage else show in MB.",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Boolean
        },
        {
            name: "system",
            description: "If true show system usage else show process usage.",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Boolean
        }
    ],
    async execute(ctx, [type, system]) {
        let result = null;
        if (type) {
            if (system) {
                const memory = await systeminformation_1.default.mem();
                const activeMemory = memory.used - memory.buffcache;
                const systemMemoryPercentage = (activeMemory / memory.total) * 100;
                result = `${systemMemoryPercentage.toFixed(2)}%`;
            }
            else {
                const stats = await (0, pidusage_1.default)(process.pid);
                const memory = await systeminformation_1.default.mem();
                const memoryUsage = (stats.memory / memory.total) * 100;
                const memoryUsed = memoryUsage.toFixed(2);
                result = `${memoryUsed}%`;
            }
            ;
        }
        else {
            if (system) {
                const memory = await systeminformation_1.default.mem();
                const memoryUsage = memory.used;
                const memoryUsageMB = memoryUsage / (1024 * 1024);
                result = `${memoryUsageMB.toFixed(2)} MB`;
            }
            else {
                const stats = await (0, pidusage_1.default)(process.pid);
                const memoryUsage = stats.memory / (1024 * 1024);
                result = `${memoryUsage.toFixed(2)} MB`;
            }
            ;
        }
        ;
        return this.success(result);
    },
});
//# sourceMappingURL=ram.js.map