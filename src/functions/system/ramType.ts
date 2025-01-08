import { ArgType, NativeFunction } from "@tryforge/forgescript";
import si from "systeminformation";
import os from 'os';
import { execSync } from "child_process";

export default new NativeFunction({
  name: "$ramType",
  aliases: ['$memoryType'],
  version: '1.0.0',
  description: "Returns the ram type.",
  output: ArgType.String,
  unwrap: false,

  async execute(ctx) {
    let result
    const memory = await si.memLayout();
    try {
      if (memory[0]?.type) {
        result = memory[0].type;
      } else {
        if (os.platform() === 'linux') {
          try {
            const output = execSync('dmidecode --type memory', { encoding: 'utf8' });
            const memoryTypeMatch = output.match(/Type:\s*(\S+)/);

            if (memoryTypeMatch) {
              result = memoryTypeMatch[1];
            } else {
              this.error(new Error('Unable to determine memory type via dmidecode.'));
            }
          } catch (error) {
            if (error instanceof Error) {
              return this.error(error);
            }
          }
        } else {
          return this.error(new Error('Memory type information is not available and system is not Linux.'));
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        return this.error(error);
      }
    }
    return this.success(result);
  },
});