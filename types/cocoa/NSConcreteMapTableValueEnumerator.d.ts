/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteMapTableValueEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
  }
  namespace NSConcreteMapTableValueEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
      enumeratorWithMapTable<R = unknown, P0 = unknown>(_enumeratorWithMapTable: P0): R;
    }
  }
}

declare const NSConcreteMapTableValueEnumerator: cocoa.NSConcreteMapTableValueEnumerator.CLASS;
