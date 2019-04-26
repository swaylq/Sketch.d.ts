/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNilSetEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    nextObject<R = unknown>(): R;
  }
  namespace NSKeyValueNilSetEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const NSKeyValueNilSetEnumerator: cocoa.NSKeyValueNilSetEnumerator.CLASS;
