/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRoundedRectView<T0 = void, T1 = void, T2 = void> extends NSView {
    initWithStrokeColor_strokeWidth_fillColor_cornerRadius<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_initWithStrokeColor: P0, _strokeWidth: P1, _fillColor: P2, _cornerRadius: P3): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    strokeWidth<R = number>(): R;
    setStrokeWidth<R = void, P0 = number>(_v: P0): R;
    strokeColor<R = NSColor>(): R;
    setStrokeColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSRoundedRectView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSRoundedRectView>(): R;
      new: <R = NSRoundedRectView>() => R;
      viewWithFillColor_cornerRadius<R = unknown, P0 = unknown, P1 = number>(_viewWithFillColor: P0, _cornerRadius: P1): R;
      viewWithStrokeColor_strokeWidth_fillColor_cornerRadius<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_viewWithStrokeColor: P0, _strokeWidth: P1, _fillColor: P2, _cornerRadius: P3): R;
      viewWithStrokeColor_strokeWidth_cornerRadius<R = unknown, P0 = unknown, P1 = number, P2 = number>(_viewWithStrokeColor: P0, _strokeWidth: P1, _cornerRadius: P2): R;
    }
  }
}

declare const NSRoundedRectView: cocoa.NSRoundedRectView.CLASS;
