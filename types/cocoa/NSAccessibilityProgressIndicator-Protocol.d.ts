/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityProgressIndicatorProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {
    accessibilityValue<R = NSNumber>(): R;
  }
  namespace NSAccessibilityProgressIndicatorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {}
  }
}
