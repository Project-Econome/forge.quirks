export enum FileUnit {
  B,
  KB,
  MB,
  GB,
  TB
}

export enum ShardStatus {
  Ready = 'ready',
  Connecting = 'connecting',
  Reconnecting = 'reconnecting',
  Idle = 'idle',
  Nearly = 'nearly',
  Disconnected = 'disconnected',
  WaitingForGuilds = 'waiting_for_guilds',
  Identifying = 'identifying',
  Resuming = 'resuming',
}

export enum ShardInfo {
  id = 0,
  status = 1,
  ping = 2,
  lastPingTimestamp = 3,
  ready = 4,
  guildcount = 5
}