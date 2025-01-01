"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardInfo = exports.ShardStatus = exports.FileUnit = void 0;
var FileUnit;
(function (FileUnit) {
    FileUnit[FileUnit["B"] = 0] = "B";
    FileUnit[FileUnit["KB"] = 1] = "KB";
    FileUnit[FileUnit["MB"] = 2] = "MB";
    FileUnit[FileUnit["GB"] = 3] = "GB";
    FileUnit[FileUnit["TB"] = 4] = "TB";
})(FileUnit || (exports.FileUnit = FileUnit = {}));
var ShardStatus;
(function (ShardStatus) {
    ShardStatus["Ready"] = "ready";
    ShardStatus["Connecting"] = "connecting";
    ShardStatus["Reconnecting"] = "reconnecting";
    ShardStatus["Idle"] = "idle";
    ShardStatus["Nearly"] = "nearly";
    ShardStatus["Disconnected"] = "disconnected";
    ShardStatus["WaitingForGuilds"] = "waiting_for_guilds";
    ShardStatus["Identifying"] = "identifying";
    ShardStatus["Resuming"] = "resuming";
})(ShardStatus || (exports.ShardStatus = ShardStatus = {}));
var ShardInfo;
(function (ShardInfo) {
    ShardInfo[ShardInfo["id"] = 0] = "id";
    ShardInfo[ShardInfo["status"] = 1] = "status";
    ShardInfo[ShardInfo["ping"] = 2] = "ping";
    ShardInfo[ShardInfo["lastPingTimestamp"] = 3] = "lastPingTimestamp";
    ShardInfo[ShardInfo["ready"] = 4] = "ready";
    ShardInfo[ShardInfo["guildcount"] = 5] = "guildcount";
})(ShardInfo || (exports.ShardInfo = ShardInfo = {}));
//# sourceMappingURL=types.js.map