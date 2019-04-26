/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSCGSContext {
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    _initWithWindowNumber<R = unknown, P0 = number>(__initWithWindowNumber: P0): R;
  }
  namespace NSWindowGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSContext {
      alloc<R = NSWindowGraphicsContext>(): R;
      new: <R = NSWindowGraphicsContext>() => R;
    }
  }
}

declare const NSWindowGraphicsContext: cocoa.NSWindowGraphicsContext.CLASS;
