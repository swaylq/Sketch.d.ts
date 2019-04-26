/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSASCIIEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSASCIIEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSASCIIEncodingDetector>(): R;
      new: <R = NSASCIIEncodingDetector>() => R;
    }
  }
}

declare const NSASCIIEncodingDetector: cocoa.NSASCIIEncodingDetector.CLASS;
