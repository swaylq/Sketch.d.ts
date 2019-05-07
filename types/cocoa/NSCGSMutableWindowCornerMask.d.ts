/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSMutableWindowCornerMask<T0 = void, T1 = void, T2 = void> extends NSCGSWindowCornerMask {
    center<R = CGRect>(): R;
    setCenter<R = void, P0 = CGRect>(_v: P0): R;
    image<R = CGImage>(): R;
    setImage<R = void, P0 = CGImage>(_v: P0): R;
    imageScale<R = number>(): R;
    setImageScale<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSCGSMutableWindowCornerMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindowCornerMask {
      alloc<R = NSCGSMutableWindowCornerMask>(): R;
      new: <R = NSCGSMutableWindowCornerMask>() => R;
    }
  }
}

declare const NSCGSMutableWindowCornerMask: cocoa.NSCGSMutableWindowCornerMask.CLASS;
