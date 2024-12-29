"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQuirks = void 0;
const forgescript_1 = require("@tryforge/forgescript");
class ForgeQuirks extends forgescript_1.ForgeExtension {
    name = "forge.quirks";
    description = "A collection of quirky, niche functions for those who need a little extra from forgescript.";
    version = "1.0.0";
    init() {
        this.load(__dirname + '/functions');
    }
    ;
}
exports.ForgeQuirks = ForgeQuirks;
;
//# sourceMappingURL=index.js.map