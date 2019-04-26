/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilitySwitchProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityButtonProtocol {
    accessibilityValue<R = NSString>(): R;
    accessibilityPerformDecrement<R = boolean>(): R;
    accessibilityPerformIncrement<R = boolean>(): R;
  }
  namespace NSAccessibilitySwitchProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityButtonProtocol {}
  }
}
