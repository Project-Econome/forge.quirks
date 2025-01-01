export declare enum FileUnit {
    B = 0,
    KB = 1,
    MB = 2,
    GB = 3,
    TB = 4
}
export declare enum ShardStatus {
    Ready = "ready",
    Connecting = "connecting",
    Reconnecting = "reconnecting",
    Idle = "idle",
    Nearly = "nearly",
    Disconnected = "disconnected",
    WaitingForGuilds = "waiting_for_guilds",
    Identifying = "identifying",
    Resuming = "resuming"
}
export declare enum ShardInfo {
    status = 0,
    guildcount = 1,
    ping = 2,
    id = 3,
    lastPingTimestamp = 4,
    ready = 5
}
//# sourceMappingURL=types.d.ts.map