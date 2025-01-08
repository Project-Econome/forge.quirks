"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$battery",
    version: '1.0.0',
    description: "Returns the whole battery info in a json.",
    output: forgescript_1.ArgType.Json,
    unwrap: false,
    async execute(ctx) {
        const battery = await systeminformation_1.default.battery();
        return this.success(battery);
    },
});
//# sourceMappingURL=battery.js.map