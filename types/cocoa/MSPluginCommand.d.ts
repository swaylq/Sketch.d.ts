/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginCommand<T0 = void, T1 = void, T2 = void> extends NSObject, COPrintControllerProtocol {
    cxx_destruct<R = void>(): R;
    setValue_forKey_onDocument<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setValue: P0, _forKey: P1, _onDocument: P2): R;
    valueForKey_onDocument<R = unknown, P0 = unknown, P1 = unknown>(_valueForKey: P0, _onDocument: P1): R;
    setValue_forKey_onLayer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setValue: P0, _forKey: P1, _onLayer: P2): R;
    valueForKey_onLayer<R = unknown, P0 = unknown, P1 = unknown>(_valueForKey: P0, _onLayer: P1): R;
    pluginBundleIdentifierForMetadata<R = unknown>(): R;
    setValue_forKey_onObject_forPluginIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_setValue: P0, _forKey: P1, _onObject: P2, _forPluginIdentifier: P3): R;
    setValue_forKey_onDocument_forPluginIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_setValue: P0, _forKey: P1, _onDocument: P2, _forPluginIdentifier: P3): R;
    setValue_forKey_onLayer_forPluginIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_setValue: P0, _forKey: P1, _onLayer: P2, _forPluginIdentifier: P3): R;
    valueForKey_onDocument_forPluginIdentifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_valueForKey: P0, _onDocument: P1, _forPluginIdentifier: P2): R;
    valueForKey_onLayer_forPluginIdentifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_valueForKey: P0, _onLayer: P1, _forPluginIdentifier: P2): R;
    metadata<R = unknown>(): R;
    shouldReloadWithActionID<R = boolean, P0 = unknown>(_shouldReloadWithActionID: P0): R;
    menuItemWithAction<R = unknown, P0 = string>(_menuItemWithAction: P0): R;
    shortcutModifiers<R = number>(): R;
    shortcutKey<R = unknown>(): R;
    error<R = void, P0 = unknown>(_error: P0): R;
    logString<R = unknown>(): R;
    log_atLevel<R = void, P0 = unknown, P1 = unknown>(_log: P0, _atLevel: P1): R;
    executeScript<R = unknown, P0 = unknown>(_executeScript: P0): R;
    hasRunHandler<R = boolean>(): R;
    tearDownIfFinished<R = boolean>(): R;
    runHandler_context_manager_onComplete<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_runHandler: P0, _context: P1, _manager: P2, _onComplete: P3): R;
    runHandler_context_manager<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_runHandler: P0, _context: P1, _manager: P2): R;
    runHandlerWithKey_context_manager_onComplete<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_runHandlerWithKey: P0, _context: P1, _manager: P2, _onComplete: P3): R;
    runHandlerWithKey_context_manager<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_runHandlerWithKey: P0, _context: P1, _manager: P2): R;
    run_manager_onComplete<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_run: P0, _manager: P1, _onComplete: P2): R;
    run_manager<R = unknown, P0 = unknown, P1 = unknown>(_run: P0, _manager: P1): R;
    runHandler_withOptionalKey_context_manager_onComplete<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_runHandler: P0, _withOptionalKey: P1, _context: P2, _manager: P3, _onComplete: P4): R;
    fullContextFromContext_url<R = unknown, P0 = unknown, P1 = unknown>(_fullContextFromContext: P0, _url: P1): R;
    tearDownSession<R = void>(): R;
    setUpSessionWithContext<R = void, P0 = unknown>(_setUpSessionWithContext: P0): R;
    newSessionForURL_shouldReload<R = void, P0 = unknown, P1 = boolean>(_newSessionForURL: P0, _shouldReload: P1): R;
    loadJSGlobals<R = void>(): R;
    flattenedHandlerIndexWithHandlers<R = unknown, P0 = unknown>(_flattenedHandlerIndexWithHandlers: P0): R;
    dealloc<R = void>(): R;
    initWithScript_identifier_name_handlers_shortcut_scope<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number>(_initWithScript: P0, _identifier: P1, _name: P2, _handlers: P3, _shortcut: P4, _scope: P5): R;
    initWithScript_identifier_name_runHandler_scope<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_initWithScript: P0, _identifier: P1, _name: P2, _runHandler: P3, _scope: P4): R;
    timeToExecuteSelector_target_iterations<R = number, P0 = unknown, P1 = unknown, P2 = number>(_timeToExecuteSelector: P0, _target: P1, _iterations: P2): R;
    callback_asBlockWithArguments_data<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_callback: P0, _asBlockWithArguments: P1, _data: P2): R;
    callCallback_withBlockArguments_data_timestamp<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_callCallback: P0, _withBlockArguments: P1, _data: P2, _timestamp: P3): R;
    runCallback_withDocumentAtURL_data<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_runCallback: P0, _withDocumentAtURL: P1, _data: P2): R;
    finishTestingMultipleItems<R = void>(): R;
    testNextItem<R = void>(): R;
    finishTestingItem_results<R = void, P0 = unknown, P1 = unknown>(_finishTestingItem: P0, _results: P1): R;
    beginTestingMultipleItems_withItemCallback_finishCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_beginTestingMultipleItems: P0, _withItemCallback: P1, _finishCallback: P2): R;
    finishPerformanceTestingWithResults<R = void, P0 = unknown>(_finishPerformanceTestingWithResults: P0): R;
    beginPerformanceTesting_minimumAPI<R = void, P0 = unknown, P1 = number>(_beginPerformanceTesting: P0, _minimumAPI: P1): R;
    prepareForPerformanceTesting<R = void>(): R;
    URLForPerformanceTempFileWithName<R = unknown, P0 = unknown>(_URLForPerformanceTempFileWithName: P0): R;
    URLForPerformanceDocumentWithName<R = unknown, P0 = unknown>(_URLForPerformanceDocumentWithName: P0): R;
    manager<R = MSPluginManager>(): R;
    setManager<R = void, P0 = MSPluginManager>(_v: P0): R;
    coreModuleMap<R = NSMutableDictionary>(): R;
    setCoreModuleMap<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    executingScript<R = NSString>(): R;
    setExecutingScript<R = void, P0 = NSString>(_v: P0): R;
    errorInScript<R = boolean>(): R;
    setErrorInScript<R = void, P0 = boolean>(_v: P0): R;
    hasAPI<R = boolean>(): R;
    setHasAPI<R = void, P0 = boolean>(_v: P0): R;
    context<R = NSMutableDictionary>(): R;
    setContext<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    session<R = COScript>(): R;
    setSession<R = void, P0 = COScript>(_v: P0): R;
    logsWhenRunViaTests<R = NSMutableArray>(): R;
    setLogsWhenRunViaTests<R = void, P0 = NSMutableArray>(_v: P0): R;
    disableCocoaScriptPreprocessor<R = boolean>(): R;
    setDisableCocoaScriptPreprocessor<R = void, P0 = boolean>(_v: P0): R;
    scope<R = number>(): R;
    pluginBundle<R = MSPluginBundle>(): R;
    setPluginBundle<R = void, P0 = MSPluginBundle>(_v: P0): R;
    shortcut<R = NSString>(): R;
    handlers<R = NSDictionary>(): R;
    name<R = NSString>(): R;
    script<R = MSPluginScript>(): R;
    identifier<R = NSString>(): R;
    commandSpecifier<R = MSPluginCommandSpecifier>(): R;
    stayRunning<R = boolean>(): R;
    setStayRunning<R = void, P0 = boolean>(_v: P0): R;
    performanceData<R = NSDictionary>(): R;
    setPerformanceData<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace MSPluginCommand {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, COPrintControllerProtocol {
      alloc<R = MSPluginCommand>(): R;
      new: <R = MSPluginCommand>() => R;
      commandWithJSON_scripts_scriptsURL<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_commandWithJSON: P0, _scripts: P1, _scriptsURL: P2): R;
      actionIDsNotToReload<R = unknown>(): R;
    }
  }
}

declare const MSPluginCommand: cocoa.MSPluginCommand.CLASS;
