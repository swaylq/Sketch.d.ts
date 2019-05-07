/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGLSurface<T0 = void, T1 = void, T2 = void> extends NSCGLSurface {
    layerContents<R = unknown>(): R;
    _copyNonatomicRenderValue<R = void>(): R;
    image<R = CGImage>(): R;
    colorSpace<R = CGColorSpace>(): R;
    isOpaque<R = boolean>(): R;
    isStereo<R = boolean>(): R;
    isFloatingPoint<R = boolean>(): R;
    bitsPerPixel<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    displayMask<R = number>(): R;
    size<R = CGSize>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGLSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGLSurface {
      alloc<R = _NSCGLSurface>(): R;
      new: <R = _NSCGLSurface>() => R;
    }
  }
}
