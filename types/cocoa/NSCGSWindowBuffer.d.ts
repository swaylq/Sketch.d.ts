/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    bitmapInfo<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    bitsPerPixel<R = number>(): R;
    bytes<R = void>(): R;
    bytesPerRow<R = number>(): R;
    colorSpace<R = CGColorSpace>(): R;
    height<R = number>(): R;
    scale<R = number>(): R;
    width<R = number>(): R;
  }
  namespace NSCGSWindowBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSWindowBuffer>(): R;
      new: <R = NSCGSWindowBuffer>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCGSWindowBuffer: cocoa.NSCGSWindowBuffer.CLASS;
