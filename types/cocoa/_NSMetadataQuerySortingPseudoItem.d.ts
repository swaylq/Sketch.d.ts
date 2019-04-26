/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataQuerySortingPseudoItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
  }
  namespace _NSMetadataQuerySortingPseudoItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSMetadataQuerySortingPseudoItem>(): R;
      new: <R = _NSMetadataQuerySortingPseudoItem>() => R;
    }
  }
}
