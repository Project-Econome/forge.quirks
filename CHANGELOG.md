# Changelog

All notable changes to this project will be documented in this file.

---

## [1.0.0] (2025-01-01)

### Added

- **$dbPing** - `Returns the ping of the forge.db`
  - Will be removed since forge.db will have this natively.
- **$cpuTemp** - `Returns the cpu temperature (only works on linux)`
- **$cpuUsage[**`singleCore`**]** - `Returns the process cpu usage in %`
  - _`singleCore`_ If true will show the process usage on a single core. (`boolean`)
- **$hyperlink** - `Added a embed link argument`
  - _`text`_ The text to turn into a hyperlink. (`string`)
  - _`link`_ The link to direct the text too. (`string`)
  - _`embed?`_ If the bot should embed the link (in normal messages). (`boolean`)
- **$projectVersion** - `Returns the version in package.json.`
- **Ram[**`percentage?`**;**`system?`**]** - Returns the ram usage.
  - _`percentage?`_ If true it will return the usage in x%. (`boolean`)
  - _`system?`_ If true will show the usage of the system. if false will show the process usage. (`boolean`)
- **RamTotal** - Returns the total amount ram.
- **$roundtripPing** - `Returns the ping between the client and the discord servers.`
- **$shardInfo[**`shardID`**;**`type?`**]** - `Returns info on a shard.`
  - **shardID:** The id of the shard.
  - **Type?:** The value to extract `(if nothing it returns everything as json)`
    - _`id`_ Returns the id of the shard. (`number`)
    - _`status`_ Returns the status of the shard. ([Status](https://github.com/discordjs/discord.js/blob/main/packages/discord.js/typings/index.d.ts#L5511))
    - _`ping`_ Returns the ping of the shard. (`number`)
    - _`lastPingTimestamp`_ Returns the last shard ping received from discord. (`number`)
    - _`ready`_ Returns if the shard is ready or not. (`boolean`)
    - _`guildcount`_ Returns the amount of guilds on the shard. (`number`)
- **$shardStatus** - `Return a json of all shards and their status.`
- **$shardsOnline** - `Returns the total amount of online shards.`
- **$shardsOffline** - `Returns the total amount of offline shards.`
- **$shardsIdle** - `Returns the total amount of Idle shards.`
- **$shardCount** - `Returns the total amount of shards.`
- **$smallText[**`text`**]**
  - _`text`_ The text to make small, Only works on new lines!
