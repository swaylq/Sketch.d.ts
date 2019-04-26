/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityButtonProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    accessibilityPerformPress<R = boolean>(): R;
    accessibilityLabel<R = NSString>(): R;
  }
  namespace NSAccessibilityButtonProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
