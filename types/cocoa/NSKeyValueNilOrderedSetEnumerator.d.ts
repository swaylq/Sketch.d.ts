/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilOrderedSetEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace NSKeyValueNilOrderedSetEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const NSKeyValueNilOrderedSetEnumerator: cocoa.NSKeyValueNilOrderedSetEnumerator.CLASS;
