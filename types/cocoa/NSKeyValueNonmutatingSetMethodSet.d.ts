/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingSetMethodSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {}
  namespace NSKeyValueNonmutatingSetMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingSetMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingSetMethodSet: cocoa.NSKeyValueNonmutatingSetMethodSet.CLASS;
