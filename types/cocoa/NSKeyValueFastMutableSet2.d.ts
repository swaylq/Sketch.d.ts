/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet2<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableSet {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    _nonNilSetValueWithSelector<R = unknown, P0 = string>(__nonNilSetValueWithSelector: P0): R;
  }
  namespace NSKeyValueFastMutableSet2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableSet {}
  }
}

declare const NSKeyValueFastMutableSet2: cocoa.NSKeyValueFastMutableSet2.CLASS;
