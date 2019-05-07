/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingArrayMethodSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {}
  namespace NSKeyValueNonmutatingArrayMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingArrayMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingArrayMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingArrayMethodSet: cocoa.NSKeyValueNonmutatingArrayMethodSet.CLASS;
