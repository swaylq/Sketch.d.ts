/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignObject<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignObject {}
  namespace MSImmutableForeignObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignObject {
      alloc<R = MSImmutableForeignObject>(): R;
      new: <R = MSImmutableForeignObject>() => R;
    }
  }
}

declare const MSImmutableForeignObject: cocoa.MSImmutableForeignObject.CLASS;
