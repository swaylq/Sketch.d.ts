/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityMenuExtrasMenuBar<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
    _accessibilityChildren<R = unknown>(): R;
  }
  namespace NSAccessibilityMenuExtrasMenuBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityMenuExtrasMenuBar>(): R;
      new: <R = NSAccessibilityMenuExtrasMenuBar>() => R;
    }
  }
}

declare const NSAccessibilityMenuExtrasMenuBar: cocoa.NSAccessibilityMenuExtrasMenuBar.CLASS;
