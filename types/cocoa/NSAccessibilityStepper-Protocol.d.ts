/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityStepperProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
    accessibilityLabel<R = NSString>(): R;
    accessibilityValue<R = unknown>(): R;
  }
  namespace NSAccessibilityStepperProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
