/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityImageProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    accessibilityLabel<R = NSString>(): R;
  }
  namespace NSAccessibilityImageProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
