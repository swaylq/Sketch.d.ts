/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataUnarchiver<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
    decoder<R = unknown>(): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    dataDecoder<R = BCJSONDecoder>(): R;
    setDataDecoder<R = void, P0 = BCJSONDecoder>(_v: P0): R;
  }
  namespace MSJSONDataUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
      alloc<R = MSJSONDataUnarchiver>(): R;
      new: <R = MSJSONDataUnarchiver>() => R;
      unarchiveObjectWithString_asVersion_corruptionDetected_error<R = unknown, P0 = unknown, P1 = number, P2 = string, P3 = unknown>(_unarchiveObjectWithString: P0, _asVersion: P1, _corruptionDetected: P2, _error: P3): R;
    }
  }
}

declare const MSJSONDataUnarchiver: cocoa.MSJSONDataUnarchiver.CLASS;
