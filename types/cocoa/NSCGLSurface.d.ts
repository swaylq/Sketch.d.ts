/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGLSurface<T0 = void, T1 = void, T2 = void> extends NSObject {
    flushRect<R = void, P0 = CGRect>(_flushRect: P0): R;
    isAttachedToCGLContext<R = boolean, P0 = _CGLContextObject>(_isAttachedToCGLContext: P0): R;
    attachToCGLContext<R = void, P0 = _CGLContextObject>(_attachToCGLContext: P0): R;
    initWithSize_colorSpace_atomic<R = unknown, P0 = CGSize, P1 = CGColorSpace, P2 = boolean>(_initWithSize: P0, _colorSpace: P1, _atomic: P2): R;
    colorSpace<R = CGColorSpace>(): R;
    opaque<R = boolean>(): R;
    floatingPoint<R = boolean>(): R;
    bitsPerPixel<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    stereo<R = boolean>(): R;
    displayMask<R = number>(): R;
    size<R = CGSize>(): R;
    rightImage<R = CGImage>(): R;
    leftImage<R = CGImage>(): R;
    image<R = CGImage>(): R;
    layerContents<R = unknown>(): R;
  }
  namespace NSCGLSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGLSurface>(): R;
      new: <R = NSCGLSurface>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCGLSurface: cocoa.NSCGLSurface.CLASS;
