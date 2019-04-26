/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityContainsTransientUIProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {
    isAccessibilityAlternateUIVisible<R = boolean>(): R;
    accessibilityPerformShowDefaultUI<R = boolean>(): R;
    accessibilityPerformShowAlternateUI<R = boolean>(): R;
  }
  namespace NSAccessibilityContainsTransientUIProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElementProtocol {}
  }
}
