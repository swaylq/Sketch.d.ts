/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsRevertProgressOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _setFrameCommon_display_stashSize<R = void, P0 = CGRect, P1 = boolean, P2 = boolean>(__setFrameCommon: P0, _display: P1, _stashSize: P2): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _orderOutRelativeToWindow<R = void, P0 = unknown>(__orderOutRelativeToWindow: P0): R;
    _orderFrontRelativeToWindow<R = void, P0 = unknown>(__orderFrontRelativeToWindow: P0): R;
  }
  namespace NSDocumentRevisionsRevertProgressOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSDocumentRevisionsRevertProgressOverlayWindow>(): R;
      new: <R = NSDocumentRevisionsRevertProgressOverlayWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsRevertProgressOverlayWindow: cocoa.NSDocumentRevisionsRevertProgressOverlayWindow.CLASS;
