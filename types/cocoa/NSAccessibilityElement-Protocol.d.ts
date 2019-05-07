/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityElementProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    accessibilityParent<R = unknown>(): R;
    accessibilityFrame<R = CGRect>(): R;
    accessibilityIdentifier<R = NSString>(): R;
    isAccessibilityFocused<R = boolean>(): R;
  }
  namespace NSAccessibilityElementProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
