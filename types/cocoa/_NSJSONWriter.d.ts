/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSJSONWriter<T0 = void, T1 = void, T2 = void> extends NSObject {
    appendString_range<R = number, P0 = unknown, P1 = _NSRange>(_appendString: P0, _range: P1): R;
    resizeTemporaryBuffer<R = void, P0 = number>(_resizeTemporaryBuffer: P0): R;
    writeRootObject_toStream_options_error<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_writeRootObject: P0, _toStream: P1, _options: P2, _error: P3): R;
    dataWithRootObject_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dataWithRootObject: P0, _options: P1, _error: P2): R;
    dealloc<R = void>(): R;
  }
  namespace _NSJSONWriter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSJSONWriter>(): R;
      new: <R = _NSJSONWriter>() => R;
    }
  }
}
