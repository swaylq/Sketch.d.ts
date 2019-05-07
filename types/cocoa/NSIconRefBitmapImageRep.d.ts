/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIconRefBitmapImageRep<T0 = void, T1 = void, T2 = void> extends NSBitmapImageRep {
    bitmapData<R = string>(): R;
    TIFFRepresentation<R = unknown>(): R;
    CGImage<R = CGImage>(): R;
    _ensureBitmapDataAvailable<R = void>(): R;
    iconRef<R = OpaqueIconRef>(): R;
    initWithIconRef_size<R = unknown, P0 = OpaqueIconRef, P1 = CGSize>(_initWithIconRef: P0, _size: P1): R;
    initWithIconRef_sizeIdentifier_scaleIdentifier<R = unknown, P0 = OpaqueIconRef, P1 = number, P2 = number>(_initWithIconRef: P0, _sizeIdentifier: P1, _scaleIdentifier: P2): R;
  }
  namespace NSIconRefBitmapImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBitmapImageRep {
      alloc<R = NSIconRefBitmapImageRep>(): R;
      new: <R = NSIconRefBitmapImageRep>() => R;
    }
  }
}

declare const NSIconRefBitmapImageRep: cocoa.NSIconRefBitmapImageRep.CLASS;
