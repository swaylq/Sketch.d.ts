/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataArchiver<T0 = void, T1 = void, T2 = void> extends MSJSONArchiver {
    encoder<R = unknown>(): R;
    archivedData<R = NSMutableData>(): R;
    setArchivedData<R = void, P0 = NSMutableData>(_v: P0): R;
    dataEncoder<R = BCJSONEncoder>(): R;
    setDataEncoder<R = void, P0 = BCJSONEncoder>(_v: P0): R;
  }
  namespace MSJSONDataArchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONArchiver {
      alloc<R = MSJSONDataArchiver>(): R;
      new: <R = MSJSONDataArchiver>() => R;
      archiveStringWithRootObject_error<R = unknown, P0 = unknown, P1 = unknown>(_archiveStringWithRootObject: P0, _error: P1): R;
    }
  }
}

declare const MSJSONDataArchiver: cocoa.MSJSONDataArchiver.CLASS;
