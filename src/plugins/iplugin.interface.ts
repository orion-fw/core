export interface IPlugin {
  name: string;
  load(): void;
  unload?(): void;
}
