/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIndexSetEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    nextObject<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIndexSet<R = unknown, P0 = unknown>(_initWithIndexSet: P0): R;
  }
  namespace _NSIndexSetEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}
