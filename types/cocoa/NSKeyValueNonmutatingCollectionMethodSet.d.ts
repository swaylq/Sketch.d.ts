/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingCollectionMethodSet<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSKeyValueNonmutatingCollectionMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueNonmutatingCollectionMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingCollectionMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingCollectionMethodSet: cocoa.NSKeyValueNonmutatingCollectionMethodSet.CLASS;
