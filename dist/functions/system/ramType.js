"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
exports.default = new forgescript_1.NativeFunction({
    name: "$ramType",
    aliases: ['$memoryType'],
    version: '1.0.0',
    description: "Returns the ram type.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute(ctx) {
        const memory = await systeminformation_1.default.memLayout();
        const type = memory[0].type;
        return this.success(type);
    },
});
//# sourceMappingURL=ramType.js.map