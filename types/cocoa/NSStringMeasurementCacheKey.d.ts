/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStringMeasurementCacheKey<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    setAttributedString_size_options_maximumNumberOfLines_appearance<R = void, P0 = unknown, P1 = CGSize, P2 = number, P3 = number, P4 = unknown>(_setAttributedString: P0, _size: P1, _options: P2, _maximumNumberOfLines: P3, _appearance: P4): R;
  }
  namespace NSStringMeasurementCacheKey {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSStringMeasurementCacheKey>(): R;
      new: <R = NSStringMeasurementCacheKey>() => R;
    }
  }
}

declare const NSStringMeasurementCacheKey: cocoa.NSStringMeasurementCacheKey.CLASS;
