/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowBuffer<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBuffer {
    scale<R = number>(): R;
    colorSpace<R = CGColorSpace>(): R;
    bitmapInfo<R = number>(): R;
    bitsPerComponent<R = number>(): R;
    bitsPerPixel<R = number>(): R;
    bytesPerRow<R = number>(): R;
    height<R = number>(): R;
    width<R = number>(): R;
    bytes<R = void>(): R;
    dealloc<R = void>(): R;
    initWithBytes_width_height_bytesPerRow_bitsPerPixel_bitsPerComponent_bitmapInfo_colorSpace_scale<R = unknown, P0 = void, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = number, P7 = CGColorSpace, P8 = number>(_initWithBytes: P0, _width: P1, _height: P2, _bytesPerRow: P3, _bitsPerPixel: P4, _bitsPerComponent: P5, _bitmapInfo: P6, _colorSpace: P7, _scale: P8): R;
  }
  namespace _NSCGSWindowBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBuffer {
      alloc<R = _NSCGSWindowBuffer>(): R;
      new: <R = _NSCGSWindowBuffer>() => R;
    }
  }
}
