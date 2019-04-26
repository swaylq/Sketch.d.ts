/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotor<T0 = void, T1 = void, T2 = void> extends NSObject {
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSAccessibilityCustomRotor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomRotor>(): R;
      new: <R = NSAccessibilityCustomRotor>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotor: cocoa.NSAccessibilityCustomRotor.CLASS;
