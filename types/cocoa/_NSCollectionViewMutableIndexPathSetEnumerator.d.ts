/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewMutableIndexPathSetEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithCollectionViewIndexPathSet<R = unknown, P0 = unknown>(_initWithCollectionViewIndexPathSet: P0): R;
  }
  namespace _NSCollectionViewMutableIndexPathSetEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}
