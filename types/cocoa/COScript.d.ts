/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COScript<T0 = void, T1 = void, T2 = void> extends NSObject {
    cleanup<R = void>(): R;
    garbageCollect<R = void>(): R;
    executeString<R = unknown, P0 = NSString>(_executeString: P0): R;
    executeString_baseURL<R = unknown, P0 = NSString, P1 = NSURL>(_executeString: P0, _baseURL: P1): R;
    pushObject_withName<R = void, P0 = unknown, P1 = NSString>(_pushObject: P0, _withName: P1): R;
    deleteObjectWithName<R = void, P0 = NSString>(_deleteObjectWithName: P0): R;
    print<R = void, P0 = NSString>(_print: P0): R;
    shouldKeepRunning<R = boolean>(): R;
    context<R = JSGlobalContextRef>(): R;
    callFunctionNamed_withArguments<R = unknown, P0 = NSString, P1 = NSArray>(_callFunctionNamed: P0, _withArguments: P1): R;
    hasFunctionNamed<R = boolean, P0 = NSString>(_hasFunctionNamed: P0): R;
    callJSFunction_withArgumentsInArray<R = unknown, P0 = JSObjectRef, P1 = NSArray>(_callJSFunction: P0, _withArgumentsInArray: P1): R;
    printController<R = unknown>(): R;
    setPrintController<R = void, P0 = unknown>(_v: P0): R;
    errorController<R = unknown>(): R;
    setErrorController<R = void, P0 = unknown>(_v: P0): R;
    env<R = NSMutableDictionary>(): R;
    setEnv<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    shouldPreprocess<R = boolean>(): R;
    setShouldPreprocess<R = void, P0 = boolean>(_v: P0): R;
    shouldKeepAround<R = boolean>(): R;
    setShouldKeepAround<R = void, P0 = boolean>(_v: P0): R;
    // + COScript(FiberAdditions): 
    addFiber<R = void, P0 = COSFiber>(_addFiber: P0): R;
    cleanupFibers<R = void>(): R;
    removeFiber<R = void, P0 = COSFiber>(_removeFiber: P0): R;
  }
  namespace COScript {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COScript>(): R;
      new: <R = COScript>() => R;
      loadBridgeSupportFileAtURL<R = void, P0 = NSURL>(_loadBridgeSupportFileAtURL: P0): R;
      listen<R = void>(): R;
      resetPlugins<R = void>(): R;
      loadPlugins<R = void>(): R;
      setShouldLoadJSTPlugins<R = void, P0 = boolean>(_setShouldLoadJSTPlugins: P0): R;
      application<R = unknown, P0 = NSString>(_application: P0): R;
      app<R = unknown, P0 = NSString>(_app: P0): R;
      currentCOScript<R = COScript>(): R;
      setDebugController<R = unknown, P0 = CODebugController>(_setDebugController: P0): R;
      // + COScript(SpelunkingAdditions): 
      insertInMainMenu<R = boolean>(): R;
    }
  }
}

declare const COScript: cocoa.COScript.CLASS;
