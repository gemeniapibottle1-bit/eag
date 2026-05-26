import { Config } from "./launcher_types.js";

export const config: Config = {
  adapter: {
    name: process.env.PROXY_NAME ?? "EaglerProxy",
    bindHost: "0.0.0.0",
    bindPort: parseInt(process.env.PORT ?? "8080"),
    maxConcurrentClients: parseInt(process.env.MAX_CLIENTS ?? "20"),
    useNatives: true,
    skinServer: {
      skinUrlWhitelist: undefined,
      cache: {
        useCache: true,
        folderName: "skinCache",
        skinCacheLifetime: 60 * 60 * 1000,
        skinCachePruneInterval: 10 * 60 * 1000,
      },
    },
    motd: "FORWARD",
    ratelimits: {
      lockout: 10,
      limits: {
        http: 100,
        ws: 100,
        motd: 100,
        skins: 1000,
        skinsIp: 10000,
        connect: 100,
      },
    },
    origins: {
      allowOfflineDownloads: true,
      originWhitelist: null,
      originBlacklist: null,
    },
    server: {
      host: process.env.SERVER_HOST ?? "127.0.0.1",
      port: parseInt(process.env.SERVER_PORT ?? "25565"),
    },
    tls: undefined,
  },
};
