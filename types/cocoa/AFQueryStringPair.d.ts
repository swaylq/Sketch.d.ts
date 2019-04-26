/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFQueryStringPair<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    URLEncodedStringValue<R = unknown>(): R;
    initWithField_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithField: P0, _value: P1): R;
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
    field<R = unknown>(): R;
    setField<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace AFQueryStringPair {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = AFQueryStringPair>(): R;
      new: <R = AFQueryStringPair>() => R;
    }
  }
}

declare const AFQueryStringPair: cocoa.AFQueryStringPair.CLASS;
