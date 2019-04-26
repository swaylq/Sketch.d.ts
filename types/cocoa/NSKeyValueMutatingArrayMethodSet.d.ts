/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingArrayMethodSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutatingCollectionMethodSet {}
  namespace NSKeyValueMutatingArrayMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingArrayMethodSet>(): R;
      new: <R = NSKeyValueMutatingArrayMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingArrayMethodSet: cocoa.NSKeyValueMutatingArrayMethodSet.CLASS;
