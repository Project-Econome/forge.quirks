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
