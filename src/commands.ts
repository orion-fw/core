type CommandConfig = {
    adminLevel?: number;
    description?: string;
    arguments?: {
        name: string;
        help: string;
    }[]
};
export function registerCommand(commandName: string, handlerFunction: Function, config: CommandConfig, restricted: boolean){
    RegisterCommand(
        commandName,
         (source: number, args: any[], raw: boolean) => {
           if(config?.adminLevel){
            console.log('has amdin level')
                // TODO check for admin level of the user
           }

           handlerFunction(source, args, raw)
      }, restricted);
}

 // setImmediate(() => {
     //   emit('chat:addSuggestion', `/${commandName}`, config?.description, config.arguments);
     // });