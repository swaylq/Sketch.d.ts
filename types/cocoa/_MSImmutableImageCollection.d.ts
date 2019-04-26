/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableImageCollection<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = NSDictionary>(): R;
    setImages<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace _MSImmutableImageCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableImageCollection>(): R;
      new: <R = _MSImmutableImageCollection>() => R;
    }
  }
}
