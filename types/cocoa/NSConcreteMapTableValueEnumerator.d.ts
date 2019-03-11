/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteMapTableValueEnumerator<T = any> extends cocoa.NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteMapTableValueEnumerator<T = any> extends cocoa.classes.NSEnumerator {
      enumeratorWithMapTable<R = unknown, P0 = unknown>(_enumeratorWithMapTable: P0): R;
    }
  }
}

declare const NSConcreteMapTableValueEnumerator: cocoa.classes.NSConcreteMapTableValueEnumerator;
