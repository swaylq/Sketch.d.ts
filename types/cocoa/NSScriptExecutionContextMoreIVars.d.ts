/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptExecutionContextMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSScriptExecutionContextMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptExecutionContextMoreIVars>(): R;
      new: <R = NSScriptExecutionContextMoreIVars>() => R;
    }
  }
}

declare const NSScriptExecutionContextMoreIVars: cocoa.NSScriptExecutionContextMoreIVars.CLASS;
