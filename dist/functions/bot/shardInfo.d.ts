import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { ShardInfo } from "../../types";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Number;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    enum: typeof ShardInfo;
    required: true;
    rest: false;
}], true>;
export default _default;
//# sourceMappingURL=shardInfo.d.ts.map