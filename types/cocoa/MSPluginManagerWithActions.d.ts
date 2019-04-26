/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginManagerWithActions<T0 = void, T1 = void, T2 = void> extends MSPluginManager, MSActionObserverProtocol {
    pluginAndCommandIdentifiersForPlugins<R = unknown, P0 = unknown>(_pluginAndCommandIdentifiersForPlugins: P0): R;
    sendCommandActionWithID_toPlugins_withIdentifiers_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_sendCommandActionWithID: P0, _toPlugins: P1, _withIdentifiers: P2, _context: P3): R;
    pluginsToSendStartupMessageToWithOldPlugins_andNewPlugins<R = unknown, P0 = unknown, P1 = unknown>(_pluginsToSendStartupMessageToWithOldPlugins: P0, _andNewPlugins: P1): R;
    pluginsToSendShutdownMessageToWithOldPlugins_andNewPlugins<R = unknown, P0 = unknown, P1 = unknown>(_pluginsToSendShutdownMessageToWithOldPlugins: P0, _andNewPlugins: P1): R;
    enabledPluginsWithPlugins<R = unknown, P0 = unknown>(_enabledPluginsWithPlugins: P0): R;
    sendToCommandActionsForPlugin_withID_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_sendToCommandActionsForPlugin: P0, _withID: P1, _context: P2): R;
    sendToInterestedCommandsActionWithID_context<R = void, P0 = unknown, P1 = unknown>(_sendToInterestedCommandsActionWithID: P0, _context: P1): R;
    contextForActionWithID_context<R = unknown, P0 = unknown, P1 = unknown>(_contextForActionWithID: P0, _context: P1): R;
    buildHandlerIndex<R = void>(): R;
    applicationWillTerminate<R = void, P0 = unknown>(_applicationWillTerminate: P0): R;
    setPlugins<R = void, P0 = unknown>(_setPlugins: P0): R;
    wilcardsEnabled<R = boolean>(): R;
    setWilcardsEnabled<R = void, P0 = boolean>(_v: P0): R;
    commandsWithHandler<R = NSDictionary>(): R;
    setCommandsWithHandler<R = void, P0 = NSDictionary>(_v: P0): R;
    dataManager<R = MSDataSupplierManager>(): R;
    setDataManager<R = void, P0 = MSDataSupplierManager>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPluginManagerWithActions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPluginManager, MSActionObserverProtocol {
      alloc<R = MSPluginManagerWithActions>(): R;
      new: <R = MSPluginManagerWithActions>() => R;
    }
  }
}

declare const MSPluginManagerWithActions: cocoa.MSPluginManagerWithActions.CLASS;
