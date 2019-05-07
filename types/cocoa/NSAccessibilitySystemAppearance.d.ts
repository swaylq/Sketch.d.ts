/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySystemAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSAccessibilitySystemAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSAccessibilitySystemAppearance>(): R;
      new: <R = NSAccessibilitySystemAppearance>() => R;
    }
  }
}

declare const NSAccessibilitySystemAppearance: cocoa.NSAccessibilitySystemAppearance.CLASS;
