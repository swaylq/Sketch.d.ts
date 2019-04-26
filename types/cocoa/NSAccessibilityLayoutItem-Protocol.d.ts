/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutItemProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {
    setAccessibilityFrame<R = void, P0 = CGRect>(_setAccessibilityFrame: P0): R;
  }
  namespace NSAccessibilityLayoutItemProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {}
  }
}
