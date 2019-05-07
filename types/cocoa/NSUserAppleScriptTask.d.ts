/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAppleScriptTask<T0 = void, T1 = void, T2 = void> extends NSUserScriptTask {
    executeWithAppleEvent_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_executeWithAppleEvent: P0, _completionHandler: P1): R;
    isParentDefaultTarget<R = boolean>(): R;
    setIsParentDefaultTarget<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSUserAppleScriptTask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUserScriptTask {
      alloc<R = NSUserAppleScriptTask>(): R;
      new: <R = NSUserAppleScriptTask>() => R;
    }
  }
}

declare const NSUserAppleScriptTask: cocoa.NSUserAppleScriptTask.CLASS;
