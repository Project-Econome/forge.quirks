"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const systeminformation_1 = __importDefault(require("systeminformation"));
const os_1 = __importDefault(require("os"));
const child_process_1 = require("child_process");
exports.default = new forgescript_1.NativeFunction({
    name: "$ramType",
    aliases: ['$memoryType'],
    version: '1.0.0',
    description: "Returns the ram type.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute(ctx) {
        let result;
        const memory = await systeminformation_1.default.memLayout();
        try {
            if (memory[0]?.type) {
                result = memory[0].type;
            }
            else {
                if (os_1.default.platform() === 'linux') {
                    try {
                        const output = (0, child_process_1.execSync)('lshw -class memory', { encoding: 'utf8' });
                        const memoryTypeMatch = output.match(/description: (\S+)/);
                        if (memoryTypeMatch) {
                            result = memoryTypeMatch[1];
                        }
                        else {
                            this.error(new Error('Unable to determine memory type via lshw.'));
                        }
                    }
                    catch (error) {
                        if (error instanceof Error) {
                            return this.error(error);
                        }
                    }
                }
                else {
                    return this.error(new Error('Memory type information is not available and system is not Linux.'));
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return this.error(error);
            }
        }
        return this.success(result);
    },
});
//# sourceMappingURL=ramType.js.map