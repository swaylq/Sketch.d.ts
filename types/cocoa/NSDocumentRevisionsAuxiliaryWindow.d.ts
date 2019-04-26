/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsAuxiliaryWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    customAccessibilityParent<R = unknown>(): R;
    setCustomAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSDocumentRevisionsAuxiliaryWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSDocumentRevisionsAuxiliaryWindow>(): R;
      new: <R = NSDocumentRevisionsAuxiliaryWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsAuxiliaryWindow: cocoa.NSDocumentRevisionsAuxiliaryWindow.CLASS;
