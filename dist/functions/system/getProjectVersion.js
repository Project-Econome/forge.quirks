"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = new forgescript_1.NativeFunction({
    name: "$projectVersion",
    version: '1.0.0',
    description: "Returns the version from your package.json usage.",
    output: forgescript_1.ArgType.String,
    unwrap: false,
    async execute() {
        let result = '';
        const packageJsonPath = (0, path_1.join)(process.cwd(), 'package.json');
        try {
            const packageJson = JSON.parse((0, fs_1.readFileSync)(packageJsonPath, 'utf-8'));
            result = `${packageJson.version}`;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error reading package.json:', error.message);
            }
            else {
                console.error('Unknown error occurred:', error);
            }
            result = 'undefined';
        }
        return this.success(result);
    },
});
//# sourceMappingURL=getProjectVersion.js.map