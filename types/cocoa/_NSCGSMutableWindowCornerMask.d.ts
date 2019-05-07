/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSMutableWindowCornerMask<T0 = void, T1 = void, T2 = void> extends NSCGSMutableWindowCornerMask {
    setCenter<R = void, P0 = CGRect>(_setCenter: P0): R;
    center<R = CGRect>(): R;
    setImageScale<R = void, P0 = number>(_setImageScale: P0): R;
    imageScale<R = number>(): R;
    setImage<R = void, P0 = CGImage>(_setImage: P0): R;
    image<R = CGImage>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSMutableWindowCornerMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSMutableWindowCornerMask {
      alloc<R = _NSCGSMutableWindowCornerMask>(): R;
      new: <R = _NSCGSMutableWindowCornerMask>() => R;
    }
  }
}
