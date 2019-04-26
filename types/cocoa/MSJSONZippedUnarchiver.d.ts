/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONZippedUnarchiver<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
    unarchiveRawDataAtSubpath_error<R = unknown, P0 = unknown, P1 = unknown>(_unarchiveRawDataAtSubpath: P0, _error: P1): R;
    unarchiveObjectAtSubpath_error<R = unknown, P0 = unknown, P1 = unknown>(_unarchiveObjectAtSubpath: P0, _error: P1): R;
    containsFileAtSubpath<R = boolean, P0 = unknown>(_containsFileAtSubpath: P0): R;
    decoder<R = unknown>(): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    zipDecoder<R = BCJSONZippedDecoder>(): R;
    setZipDecoder<R = void, P0 = BCJSONZippedDecoder>(_v: P0): R;
  }
  namespace MSJSONZippedUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
      alloc<R = MSJSONZippedUnarchiver>(): R;
      new: <R = MSJSONZippedUnarchiver>() => R;
    }
  }
}

declare const MSJSONZippedUnarchiver: cocoa.MSJSONZippedUnarchiver.CLASS;
