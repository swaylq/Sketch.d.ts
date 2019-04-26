/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutAreaProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {
    accessibilitySelectedChildren<R = NSArray>(): R;
    accessibilityChildren<R = NSArray>(): R;
    accessibilityLabel<R = NSString>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
  }
  namespace NSAccessibilityLayoutAreaProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {}
  }
}
