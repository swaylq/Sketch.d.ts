/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingOrderedSetMethodSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {}
  namespace NSKeyValueNonmutatingOrderedSetMethodSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingOrderedSetMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingOrderedSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingOrderedSetMethodSet: cocoa.NSKeyValueNonmutatingOrderedSetMethodSet.CLASS;
