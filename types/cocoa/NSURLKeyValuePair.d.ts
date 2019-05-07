/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLKeyValuePair<T0 = void, T1 = void, T2 = void> extends NSObject {
    hash<R = number>(): R;
    description<R = unknown>(): R;
    value<R = unknown>(): R;
    key<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_setValue: P0): R;
    setKey<R = void, P0 = unknown>(_setKey: P0): R;
    dealloc<R = void>(): R;
    initWithKey_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithKey: P0, _value: P1): R;
  }
  namespace NSURLKeyValuePair {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLKeyValuePair>(): R;
      new: <R = NSURLKeyValuePair>() => R;
      pairWithKey_value<R = unknown, P0 = unknown, P1 = unknown>(_pairWithKey: P0, _value: P1): R;
      pair<R = unknown>(): R;
    }
  }
}

declare const NSURLKeyValuePair: cocoa.NSURLKeyValuePair.CLASS;
