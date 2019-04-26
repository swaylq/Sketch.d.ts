/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotorItemResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    NSObject<R = NSSecureCoding>(): R;
  }
  namespace NSAccessibilityCustomRotorItemResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomRotorItemResult>(): R;
      new: <R = NSAccessibilityCustomRotorItemResult>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotorItemResult: cocoa.NSAccessibilityCustomRotorItemResult.CLASS;
