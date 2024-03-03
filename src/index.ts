export * from "./commands";
export * from './plugins/iplugin.interface'

import { DependencyContainer } from "./dependency-container";
import { PluginManager } from "./plugins/plugin-manager";

const container = new DependencyContainer();
const pluginManager = new PluginManager(container);

export function initialize(isServer: boolean): PluginManager {
  if (isServer) {
    require("./server/index").initialize(container, pluginManager);
  } else {
    require("./client/index").initialize(container, pluginManager);
  }
  return pluginManager;
}

