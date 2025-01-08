"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$batteryIsCharging",
    version: '1.0.0',
    description: "Returns if the battery is charging.",
    output: forgescript_1.ArgType.Boolean,
    unwrap: false,
    async execute(ctx) {
        const battery = await systeminformation_1.default.battery();
        console.log(battery);
        return this.success(battery.isCharging);
    },
});
//# sourceMappingURL=batteryIsCharging.js.map