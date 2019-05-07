/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAutomatorTask<T0 = void, T1 = void, T2 = void> extends NSUserScriptTask {
    executeWithInput_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_executeWithInput: P0, _completionHandler: P1): R;
    variables<R = NSDictionary>(): R;
    setVariables<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace NSUserAutomatorTask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUserScriptTask {
      alloc<R = NSUserAutomatorTask>(): R;
      new: <R = NSUserAutomatorTask>() => R;
    }
  }
}

declare const NSUserAutomatorTask: cocoa.NSUserAutomatorTask.CLASS;
