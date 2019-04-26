/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityColorButtonMockUIElement<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {}
  namespace NSAccessibilityColorButtonMockUIElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityIndexedMockUIElement {
      alloc<R = NSAccessibilityColorButtonMockUIElement>(): R;
      new: <R = NSAccessibilityColorButtonMockUIElement>() => R;
    }
  }
}

declare const NSAccessibilityColorButtonMockUIElement: cocoa.NSAccessibilityColorButtonMockUIElement.CLASS;
