export function definitionsFromContext(context) {
    return context.keys()
        .map(function (key) { return definitionForModuleWithContextAndKey(context, key); })
        .filter(function (value) { return value; });
}
function definitionForModuleWithContextAndKey(context, key) {
    var identifier = identifierForContextKey(key);
    if (identifier) {
        return definitionForModuleAndIdentifier(context(key), identifier);
    }
}
function definitionForModuleAndIdentifier(module, identifier) {
    var controllerConstructor = module.default;
    if (typeof controllerConstructor == "function") {
        return { identifier: identifier, controllerConstructor: controllerConstructor };
    }
}
export function identifierForContextKey(key) {
    var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
    if (logicalName) {
        return logicalName.replace(/_/g, "-").replace(/\//g, "--");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2VicGFjay1oZWxwZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxPQUEwQztJQUMvRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsb0NBQW9DLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO1NBQzlELE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQWlCLENBQUE7QUFDM0MsQ0FBQztBQUVELFNBQVMsb0NBQW9DLENBQUMsT0FBMEMsRUFBRSxHQUFXO0lBQ25HLElBQU0sVUFBVSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQy9DLElBQUksVUFBVSxFQUFFO1FBQ2QsT0FBTyxnQ0FBZ0MsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUE7S0FDbEU7QUFDSCxDQUFDO0FBRUQsU0FBUyxnQ0FBZ0MsQ0FBQyxNQUF3QixFQUFFLFVBQWtCO0lBQ3BGLElBQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLE9BQWMsQ0FBQTtJQUNuRCxJQUFJLE9BQU8scUJBQXFCLElBQUksVUFBVSxFQUFFO1FBQzlDLE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFBO0tBQzdDO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxHQUFXO0lBQ2pELElBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xGLElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQzNEO0FBQ0gsQ0FBQyJ9