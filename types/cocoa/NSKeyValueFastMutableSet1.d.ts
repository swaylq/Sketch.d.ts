/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet1<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableSet {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace NSKeyValueFastMutableSet1 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableSet {}
  }
}

declare const NSKeyValueFastMutableSet1: cocoa.NSKeyValueFastMutableSet1.CLASS;
