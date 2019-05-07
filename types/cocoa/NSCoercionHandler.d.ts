/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoercionHandler<T0 = void, T1 = void, T2 = void> extends NSScriptCoercionHandler {}
  namespace NSCoercionHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptCoercionHandler {
      alloc<R = NSCoercionHandler>(): R;
      new: <R = NSCoercionHandler>() => R;
    }
  }
}

declare const NSCoercionHandler: cocoa.NSCoercionHandler.CLASS;
