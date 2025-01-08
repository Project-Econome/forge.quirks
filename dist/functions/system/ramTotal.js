"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
const types_1 = require("../../types");
exports.default = new forgescript_1.NativeFunction({
    name: "$ramtotal",
    aliases: ['$totalram'],
    version: '1.0.0',
    description: "Returns the total ram.",
    output: forgescript_1.ArgType.String,
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "return",
            description: "How to return the value (default MB).",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Enum,
            enum: types_1.FileUnit
        }
    ],
    async execute(ctx, [unit]) {
        unit ??= types_1.FileUnit.MB;
        const memory = await systeminformation_1.default.mem();
        const totalMemory = memory.total / (1024 ** unit);
        return this.success(totalMemory.toFixed(2) + types_1.FileUnit[unit]);
    },
});
//# sourceMappingURL=ramTotal.js.map