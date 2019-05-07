/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchPathEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    nextObject<R = unknown>(): R;
    initWithDirectory_domains<R = unknown, P0 = number, P1 = number>(_initWithDirectory: P0, _domains: P1): R;
  }
  namespace NSSearchPathEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const NSSearchPathEnumerator: cocoa.NSSearchPathEnumerator.CLASS;
