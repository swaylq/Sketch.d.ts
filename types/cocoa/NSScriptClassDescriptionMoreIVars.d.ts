/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptClassDescriptionMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSScriptClassDescriptionMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptClassDescriptionMoreIVars>(): R;
      new: <R = NSScriptClassDescriptionMoreIVars>() => R;
    }
  }
}

declare const NSScriptClassDescriptionMoreIVars: cocoa.NSScriptClassDescriptionMoreIVars.CLASS;
