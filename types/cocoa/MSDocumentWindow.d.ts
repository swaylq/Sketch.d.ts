/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    cxx_destruct<R = void>(): R;
    setAppearance<R = void, P0 = unknown>(_setAppearance: P0): R;
    refreshAppearanceDependentViews<R = void>(): R;
    touchBar<R = unknown>(): R;
    shouldDismissPopover_event<R = boolean, P0 = unknown, P1 = unknown>(_shouldDismissPopover: P0, _event: P1): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    lastForwardedKeyEvent<R = NSEvent>(): R;
    setLastForwardedKeyEvent<R = void, P0 = NSEvent>(_v: P0): R;
    titleBarBadge<R = BCWindowBadge>(): R;
    setTitleBarBadge<R = void, P0 = BCWindowBadge>(_v: P0): R;
  }
  namespace MSDocumentWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = MSDocumentWindow>(): R;
      new: <R = MSDocumentWindow>() => R;
    }
  }
}

declare const MSDocumentWindow: cocoa.MSDocumentWindow.CLASS;
