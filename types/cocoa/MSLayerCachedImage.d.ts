/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerCachedImage<T = any> extends NSObject {
    dealloc<R = void>(): R;
    image<R = CGImage>(): R;
    setImage<R = void, P0 = CGImage>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayerCachedImage<T = any> extends NSObject {
      alloc<R = MSLayerCachedImage>(): R;
      new: <R = MSLayerCachedImage>() => R;
    }
  }
}

declare const MSLayerCachedImage: cocoa.classes.MSLayerCachedImage;