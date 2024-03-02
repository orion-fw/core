import { DependencyContainer } from "../dependency-container";
import { IPlugin } from "./iplugin.interface";

export class PluginManager {
  private plugins: IPlugin[] = [];

  constructor(private container: DependencyContainer) {}

  loadPlugin(plugin: IPlugin) {
    this.plugins.push(plugin);
    this.container.register(plugin.name, plugin);
    plugin.load();
  }

  // Weitere Methoden zum Entladen von Plugins usw.
}
