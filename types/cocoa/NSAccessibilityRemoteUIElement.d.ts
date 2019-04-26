/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRemoteUIElement<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSAccessibilityRemoteUIElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityRemoteUIElement>(): R;
      new: <R = NSAccessibilityRemoteUIElement>() => R;
      unregisterRemoteUIProcessIdentifier<R = void, P0 = number>(_unregisterRemoteUIProcessIdentifier: P0): R;
    }
  }
}

declare const NSAccessibilityRemoteUIElement: cocoa.NSAccessibilityRemoteUIElement.CLASS;
