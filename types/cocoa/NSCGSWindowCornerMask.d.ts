/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowCornerMask<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol {
    windowCornerMaskWithScale<R = unknown, P0 = number>(_windowCornerMaskWithScale: P0): R;
    center<R = CGRect>(): R;
    image<R = CGImage>(): R;
    imageScale<R = number>(): R;
  }
  namespace NSCGSWindowCornerMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol {
      alloc<R = NSCGSWindowCornerMask>(): R;
      new: <R = NSCGSWindowCornerMask>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCGSWindowCornerMask: cocoa.NSCGSWindowCornerMask.CLASS;
