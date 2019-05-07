/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySliderProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityValue<R = unknown>(): R;
    accessibilityLabel<R = NSString>(): R;
  }
  namespace NSAccessibilitySliderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
