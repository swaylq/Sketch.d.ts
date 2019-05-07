/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    CGImage<R = CGImage>(): R;
    initWithFocusedViewRect<R = unknown, P0 = CGRect>(_initWithFocusedViewRect: P0): R;
    initWithCGImage_size<R = unknown, P0 = CGImage, P1 = CGSize>(_initWithCGImage: P0, _size: P1): R;
    initWithCGImage<R = unknown, P0 = CGImage>(_initWithCGImage: P0): R;
  }
  namespace NSCGImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCGImageRep>(): R;
      new: <R = NSCGImageRep>() => R;
    }
  }
}

declare const NSCGImageRep: cocoa.NSCGImageRep.CLASS;
