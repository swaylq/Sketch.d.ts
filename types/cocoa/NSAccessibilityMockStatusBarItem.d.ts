/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityMockStatusBarItem<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
    _accessibilitySourceCell<R = unknown>(): R;
    _accessibilitySourceView<R = unknown>(): R;
    statusItem<R = NSStatusItem>(): R;
    setStatusItem<R = void, P0 = NSStatusItem>(_v: P0): R;
  }
  namespace NSAccessibilityMockStatusBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityMockUIElement {
      alloc<R = NSAccessibilityMockStatusBarItem>(): R;
      new: <R = NSAccessibilityMockStatusBarItem>() => R;
    }
  }
}

declare const NSAccessibilityMockStatusBarItem: cocoa.NSAccessibilityMockStatusBarItem.CLASS;
