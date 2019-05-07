/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSJSONSerialization<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSJSONSerialization {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSJSONSerialization>(): R;
      new: <R = NSJSONSerialization>() => R;
      JSONObjectWithStream_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_JSONObjectWithStream: P0, _options: P1, _error: P2): R;
      writeJSONObject_toStream_options_error<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_writeJSONObject: P0, _toStream: P1, _options: P2, _error: P3): R;
      JSONObjectWithData_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_JSONObjectWithData: P0, _options: P1, _error: P2): R;
      dataWithJSONObject_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dataWithJSONObject: P0, _options: P1, _error: P2): R;
      isValidJSONObject<R = boolean, P0 = unknown>(_isValidJSONObject: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSJSONSerialization: cocoa.NSJSONSerialization.CLASS;
