/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityNotifier<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSAccessibilityNotifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityNotifier>(): R;
      new: <R = NSAccessibilityNotifier>() => R;
      handleAppTermination<R = void, P0 = unknown>(_handleAppTermination: P0): R;
    }
  }
}

declare const NSAccessibilityNotifier: cocoa.NSAccessibilityNotifier.CLASS;
