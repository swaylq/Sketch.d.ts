/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEncodingDetectionPlaceholder<T0 = void, T1 = void, T2 = void> extends NSObject {
    debugDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    bytesLength<R = number>(): R;
    bytes<R = string>(): R;
    string<R = NSString>(): R;
    cfEncoding<R = number>(): R;
    nsEncoding<R = number>(): R;
  }
  namespace NSEncodingDetectionPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSEncodingDetectionPlaceholder>(): R;
      new: <R = NSEncodingDetectionPlaceholder>() => R;
      placeholderForDetector<R = unknown, P0 = unknown>(_placeholderForDetector: P0): R;
    }
  }
}

declare const NSEncodingDetectionPlaceholder: cocoa.NSEncodingDetectionPlaceholder.CLASS;
