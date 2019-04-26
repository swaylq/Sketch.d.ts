/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetectionIndicatorView<T0 = void, T1 = void, T2 = void> extends _NSDrawingHandlerView {
    copy<R = void, P0 = unknown>(_copy: P0): R;
    _showMenu<R = void, P0 = unknown>(__showMenu: P0): R;
    _reset<R = void>(): R;
    bindToTextView_forDataResult_inRange<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange>(_bindToTextView: P0, _forDataResult: P1, _inRange: P2): R;
  }
  namespace NSDataDetectionIndicatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSDrawingHandlerView {
      alloc<R = NSDataDetectionIndicatorView>(): R;
      new: <R = NSDataDetectionIndicatorView>() => R;
    }
  }
}

declare const NSDataDetectionIndicatorView: cocoa.NSDataDetectionIndicatorView.CLASS;
