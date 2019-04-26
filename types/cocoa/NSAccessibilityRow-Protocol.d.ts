/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRowProtocol<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {
    accessibilityIndex<R = number>(): R;
    accessibilityDisclosureLevel<R = number>(): R;
  }
  namespace NSAccessibilityRowProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityGroupProtocol {}
  }
}
