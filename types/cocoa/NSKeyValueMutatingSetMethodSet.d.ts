/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingSetMethodSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutatingCollectionMethodSet {}
  namespace NSKeyValueMutatingSetMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingSetMethodSet>(): R;
      new: <R = NSKeyValueMutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingSetMethodSet: cocoa.NSKeyValueMutatingSetMethodSet.CLASS;
