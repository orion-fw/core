export class DependencyContainer {
  private dependencies: Record<string, any> = {};

  register<T>(name: string, instance: T) {
    this.dependencies[name] = instance;
  }

  resolve<T>(name: string): T {
    return this.dependencies[name];
  }
}
