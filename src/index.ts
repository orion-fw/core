export * from "./commands.js";

import { DependencyContainer } from "./dependency-container";
import { PluginManager } from "./plugins/plugin-manager";

const container = new DependencyContainer();
const pluginManager = new PluginManager(container);

export function initialize(isServer: boolean) {
  if (isServer) {
    require("./server/index").initialize(container, pluginManager);
  } else {
    require("./client/index").initialize(container, pluginManager);
  }
}
