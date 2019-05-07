/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerCachedImage<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    image<R = CGImage>(): R;
    setImage<R = void, P0 = CGImage>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace MSLayerCachedImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerCachedImage>(): R;
      new: <R = MSLayerCachedImage>() => R;
    }
  }
}

declare const MSLayerCachedImage: cocoa.MSLayerCachedImage.CLASS;
