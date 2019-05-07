/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBitmapGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSWindowGraphicsContext {
    _initWithBitmapImageRep<R = unknown, P0 = unknown>(__initWithBitmapImageRep: P0): R;
    _initWithGraphicsPort_flipped_drawingToScreen<R = unknown, P0 = void, P1 = boolean, P2 = boolean>(__initWithGraphicsPort: P0, _flipped: P1, _drawingToScreen: P2): R;
    _initWithGraphicsPort_flipped<R = unknown, P0 = void, P1 = boolean>(__initWithGraphicsPort: P0, _flipped: P1): R;
  }
  namespace NSBitmapGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowGraphicsContext {
      alloc<R = NSBitmapGraphicsContext>(): R;
      new: <R = NSBitmapGraphicsContext>() => R;
    }
  }
}

declare const NSBitmapGraphicsContext: cocoa.NSBitmapGraphicsContext.CLASS;
