/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCachedShadowMask<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithCGImage_drawingRect<R = unknown, P0 = CGImage, P1 = CGRect>(_initWithCGImage: P0, _drawingRect: P1): R;
    drawingRect<R = CGRect>(): R;
    image<R = CGImage>(): R;
  }
  namespace MSCachedShadowMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSCachedShadowMask>(): R;
      new: <R = MSCachedShadowMask>() => R;
    }
  }
}

declare const MSCachedShadowMask: cocoa.MSCachedShadowMask.CLASS;
