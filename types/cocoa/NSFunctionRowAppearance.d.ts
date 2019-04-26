/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSFunctionRowAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSFunctionRowAppearance>(): R;
      new: <R = NSFunctionRowAppearance>() => R;
    }
  }
}

declare const NSFunctionRowAppearance: cocoa.NSFunctionRowAppearance.CLASS;
