"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$cpuTemp",
    version: '1.0.0',
    description: "Returns the cpu temperature.",
    output: forgescript_1.ArgType.Number,
    brackets: false,
    unwrap: false,
    async execute() {
        const cpuTemp = await systeminformation_1.default.cpuTemperature();
        return this.success(cpuTemp);
    },
});
//# sourceMappingURL=cpuTemp.js.map