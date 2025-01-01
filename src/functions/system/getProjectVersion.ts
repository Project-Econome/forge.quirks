import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { readFileSync } from 'fs';
import { join } from 'path';

export default new NativeFunction({
  name: "$projectversion",
  version: '1.0.0',
  description: "Returns the version from your package.json usage.",
  output: ArgType.String,
  unwrap: false,

  async execute() {
    let result = '';
    const packageJsonPath = join(process.cwd(), 'package.json');
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
      result = `${packageJson.version}`;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error reading package.json:', error.message);
      } else {
        console.error('Unknown error occurred:', error);
      }
      result = 'undefined';
    }

    return this.success(result);
  },
});

