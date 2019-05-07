/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _allowsOrdering<R = boolean>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    view<R = NSDocumentRevisionsView>(): R;
  }
  namespace NSDocumentRevisionsWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSDocumentRevisionsWindow>(): R;
      new: <R = NSDocumentRevisionsWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsWindow: cocoa.NSDocumentRevisionsWindow.CLASS;
