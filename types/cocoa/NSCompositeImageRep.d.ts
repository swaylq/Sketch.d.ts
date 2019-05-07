/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    initWithBaseImage_overlayImage_overlayFrame<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect>(_initWithBaseImage: P0, _overlayImage: P1, _overlayFrame: P2): R;
    overlayFrame<R = CGRect>(): R;
    overlayImage<R = NSImage>(): R;
    baseImage<R = NSImage>(): R;
  }
  namespace NSCompositeImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCompositeImageRep>(): R;
      new: <R = NSCompositeImageRep>() => R;
    }
  }
}

declare const NSCompositeImageRep: cocoa.NSCompositeImageRep.CLASS;
