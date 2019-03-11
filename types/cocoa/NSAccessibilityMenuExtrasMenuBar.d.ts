/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityMenuExtrasMenuBar<T = any> extends cocoa.NSAccessibilityMockUIElement {
    _accessibilityChildren<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityMenuExtrasMenuBar<T = any> extends cocoa.classes.NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityMenuExtrasMenuBar>(): R;
      new: <R = NSAccessibilityMenuExtrasMenuBar>() => R;
    }
  }
}

declare const NSAccessibilityMenuExtrasMenuBar: cocoa.classes.NSAccessibilityMenuExtrasMenuBar;
