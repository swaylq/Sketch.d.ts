/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingCollectionMethodSet<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSKeyValueMutatingCollectionMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueMutatingCollectionMethodSet>(): R;
      new: <R = NSKeyValueMutatingCollectionMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingCollectionMethodSet: cocoa.NSKeyValueMutatingCollectionMethodSet.CLASS;
