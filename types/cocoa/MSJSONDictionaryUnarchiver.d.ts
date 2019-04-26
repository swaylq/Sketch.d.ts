/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDictionaryUnarchiver<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
    decoder<R = unknown>(): R;
    initForReadingFromDictionary<R = unknown, P0 = unknown>(_initForReadingFromDictionary: P0): R;
    dictionary<R = NSDictionary>(): R;
    setDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    dataDecoder<R = BCJSONDecoder>(): R;
    setDataDecoder<R = void, P0 = BCJSONDecoder>(_v: P0): R;
  }
  namespace MSJSONDictionaryUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONUnarchiver {
      alloc<R = MSJSONDictionaryUnarchiver>(): R;
      new: <R = MSJSONDictionaryUnarchiver>() => R;
      unarchiveObjectFromDictionary_asVersion_corruptionDetected_error<R = unknown, P0 = unknown, P1 = number, P2 = string, P3 = unknown>(_unarchiveObjectFromDictionary: P0, _asVersion: P1, _corruptionDetected: P2, _error: P3): R;
    }
  }
}

declare const MSJSONDictionaryUnarchiver: cocoa.MSJSONDictionaryUnarchiver.CLASS;
