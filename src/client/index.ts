import { DependencyContainer } from "../dependency-container";
import { PluginManager } from "../plugins/plugin-manager";
import './client'

export function initialize(
  container: DependencyContainer,
  pluginManager: PluginManager
) {
  // Server-spezifische Initialisierung
  console.log("Client initialisiert");

  // Hier könntest du server-spezifische Plugins laden oder andere Initialisierungslogiken durchführen
}
