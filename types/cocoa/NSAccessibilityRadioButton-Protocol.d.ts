/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRadioButtonProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityButtonProtocol {
    accessibilityValue<R = NSNumber>(): R;
  }
  namespace NSAccessibilityRadioButtonProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityButtonProtocol {}
  }
}
