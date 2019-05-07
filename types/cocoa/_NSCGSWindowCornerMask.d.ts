/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowCornerMask<T0 = void, T1 = void, T2 = void> extends NSCGSWindowCornerMask {
    center<R = CGRect>(): R;
    imageScale<R = number>(): R;
    image<R = CGImage>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSWindowCornerMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindowCornerMask {
      alloc<R = _NSCGSWindowCornerMask>(): R;
      new: <R = _NSCGSWindowCornerMask>() => R;
    }
  }
}
