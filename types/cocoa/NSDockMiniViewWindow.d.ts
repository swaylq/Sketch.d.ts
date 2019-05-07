/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockMiniViewWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    makeKeyAndOrderFront<R = void, P0 = unknown>(_makeKeyAndOrderFront: P0): R;
    _setShown<R = void, P0 = boolean>(__setShown: P0): R;
    _allowsOrdering<R = boolean>(): R;
    _setVisible<R = void, P0 = boolean>(__setVisible: P0): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _isNonactivatingPanel<R = boolean>(): R;
  }
  namespace NSDockMiniViewWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSDockMiniViewWindow>(): R;
      new: <R = NSDockMiniViewWindow>() => R;
    }
  }
}

declare const NSDockMiniViewWindow: cocoa.NSDockMiniViewWindow.CLASS;
