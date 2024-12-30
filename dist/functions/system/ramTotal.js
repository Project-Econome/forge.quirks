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
    version: '1.0.0',
    description: "Returns the total ram (in GB).",
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
        const memory = await systeminformation_1.default.mem();
        const totalMemory = memory.total;
        let result = 'N/A';
        switch (unit) {
            case types_1.FileUnit.KB:
                result = (totalMemory / 1024).toFixed(2) + " KB";
                break;
            case types_1.FileUnit.MB:
                result = (totalMemory / (1024 * 1024)).toFixed(2) + " MB";
                break;
            case types_1.FileUnit.GB:
                result = (totalMemory / (1024 * 1024 * 1024)).toFixed(2) + " GB";
                break;
            case types_1.FileUnit.B:
            default:
                result = totalMemory.toFixed(2) + " B";
                break;
        }
        return this.success(result);
    },
});
//# sourceMappingURL=ramTotal.js.map