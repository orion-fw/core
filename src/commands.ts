type CommandConfig = {
    adminLevel?: number;
    description?: string;
    arguments?: {
        name: string;
        help: string;
    }[]
};
export function registerCommand(commandName: string, handlerFunction: Function, config: CommandConfig, restricted: boolean){
    setImmediate(() => {
        emit('chat:addSuggestion', `/${commandName}`, config?.description, config.arguments);
      });
    RegisterCommand(
        commandName,
         (source: number, args: any[], raw: boolean) => {
           if(config.adminLevel){
                // TODO check for admin level of the user
           }

           console.log('trigger');

           handlerFunction(source, args, raw)
      }, restricted);
}