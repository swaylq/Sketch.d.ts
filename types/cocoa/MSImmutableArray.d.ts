/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableArray<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {}
  namespace MSImmutableArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = MSImmutableArray>(): R;
      new: <R = MSImmutableArray>() => R;
    }
  }
}

declare const MSImmutableArray: cocoa.MSImmutableArray.CLASS;
