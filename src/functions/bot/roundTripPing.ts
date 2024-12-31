import { ArgType, NativeFunction } from "@tryforge/forgescript";
import https from 'https';
import { performance } from 'perf_hooks';

export default new NativeFunction({
  name: "$roundtripping",
  aliases: ['$roundtrip'],
  version: '1.0.0',
  description: "Returns the total amount of shards.",
  output: ArgType.Number,
  unwrap: false,

  async execute(ctx) {
    const start = performance.now();
    let result = null
    console.log('making request')

    const latency = await new Promise<string>((resolve, reject) => {
      https.get(
        'https://discord.com/api/v10/users/@me',
        {
          headers: {
            Authorization: `Bot ${ctx.client.token}`,
          },
        },
        (response) => {
          let data = '';
  
          response.on('data', (chunk) => {
            data += chunk;
          });
  
          response.on('end', () => {
            const end = performance.now();
            const latency = end - start;
            resolve(`${latency.toFixed(2)}ms`);
          });
        }
      ).on('error', (err) => {
        reject(err);
      });
    }).catch((err) => {
      console.log(err);
      this.customError('Error failed to make roundtrip:');
      return;
    });
    return this.success(latency);
  },
});