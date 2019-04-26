/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnapshotBitmapGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSBitmapGraphicsContext {
    retainedCGImage<R = CGImage>(): R;
    backingData<R = NSMutableData>(): R;
    setBackingData<R = void, P0 = NSMutableData>(_v: P0): R;
    signature<R = NSSnapshotContextSignature>(): R;
    setSignature<R = void, P0 = NSSnapshotContextSignature>(_v: P0): R;
  }
  namespace NSSnapshotBitmapGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBitmapGraphicsContext {
      alloc<R = NSSnapshotBitmapGraphicsContext>(): R;
      new: <R = NSSnapshotBitmapGraphicsContext>() => R;
    }
  }
}

declare const NSSnapshotBitmapGraphicsContext: cocoa.NSSnapshotBitmapGraphicsContext.CLASS;
