/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageCollection<T0 = void, T1 = void, T2 = void> extends _MSImageCollection {}
  namespace MSImageCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImageCollection {
      alloc<R = MSImageCollection>(): R;
      new: <R = MSImageCollection>() => R;
    }
  }
}

declare const MSImageCollection: cocoa.MSImageCollection.CLASS;
