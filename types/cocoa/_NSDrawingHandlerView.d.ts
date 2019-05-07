/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDrawingHandlerView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    initWithFrame_flipped_opaque<R = unknown, P0 = CGRect, P1 = boolean, P2 = boolean>(_initWithFrame: P0, _flipped: P1, _opaque: P2): R;
    drawingHandler<R = CDUnknownBlockType>(): R;
    setDrawingHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace _NSDrawingHandlerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSDrawingHandlerView>(): R;
      new: <R = _NSDrawingHandlerView>() => R;
    }
  }
}
