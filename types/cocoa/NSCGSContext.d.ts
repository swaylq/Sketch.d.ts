/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSContext<T0 = void, T1 = void, T2 = void> extends NSGraphicsContext {
    isFlipped<R = boolean>(): R;
    _invalidate<R = void>(): R;
    windowID<R = number>(): R;
    _swapContextForCarbonDrawing<R = CGContext, P0 = CGContext>(__swapContextForCarbonDrawing: P0): R;
    dealloc<R = void>(): R;
    contextID<R = number>(): R;
    _alignSize_force<R = CGSize, P0 = CGSize, P1 = boolean>(__alignSize: P0, _force: P1): R;
    _alignPoint_force<R = CGPoint, P0 = CGPoint, P1 = boolean>(__alignPoint: P0, _force: P1): R;
    _alignRect_force<R = CGRect, P0 = CGRect, P1 = boolean>(__alignRect: P0, _force: P1): R;
    _shouldEnforcePixelAlignment<R = boolean>(): R;
    _setShouldEnforcePixelAlignment<R = void, P0 = boolean>(__setShouldEnforcePixelAlignment: P0): R;
  }
  namespace NSCGSContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGraphicsContext {
      alloc<R = NSCGSContext>(): R;
      new: <R = NSCGSContext>() => R;
    }
  }
}

declare const NSCGSContext: cocoa.NSCGSContext.CLASS;
