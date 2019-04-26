/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSScriptCommandMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptCommandMoreIVars>(): R;
      new: <R = NSScriptCommandMoreIVars>() => R;
    }
  }
}

declare const NSScriptCommandMoreIVars: cocoa.NSScriptCommandMoreIVars.CLASS;
