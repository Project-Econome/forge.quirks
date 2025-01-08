"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$batteryTimeRemaining",
    aliases: ['$batteryUntilEmpty'],
    version: '1.0.0',
    description: "Returns the minutes left until empty (linux and mac only).",
    output: forgescript_1.ArgType.Number,
    unwrap: false,
    async execute(ctx) {
        let result;
        const battery = await systeminformation_1.default.battery();
        if (battery.hasBattery) {
            result = battery.timeRemaining;
        }
        else
            (result = 'No battery Attached');
        return this.success(result);
    },
});
//# sourceMappingURL=batteryTimeRemaining.js.map