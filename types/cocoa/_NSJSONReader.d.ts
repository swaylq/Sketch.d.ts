/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSJSONReader<T0 = void, T1 = void, T2 = void> extends NSObject {
    parseStream_options<R = unknown, P0 = unknown, P1 = number>(_parseStream: P0, _options: P1): R;
    parseData_options<R = unknown, P0 = unknown, P1 = number>(_parseData: P0, _options: P1): R;
    findEncodingFromData_withBOMSkipLength<R = number, P0 = unknown, P1 = number>(_findEncodingFromData: P0, _withBOMSkipLength: P1): R;
    parseUTF8JSONData_skipBytes_options<R = unknown, P0 = unknown, P1 = number, P2 = number>(_parseUTF8JSONData: P0, _skipBytes: P1, _options: P2): R;
    setError<R = void, P0 = unknown>(_setError: P0): R;
    error<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSJSONReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSJSONReader>(): R;
      new: <R = _NSJSONReader>() => R;
      validForJSON_depth_allowFragments<R = boolean, P0 = unknown, P1 = number, P2 = boolean>(_validForJSON: P0, _depth: P1, _allowFragments: P2): R;
    }
  }
}
