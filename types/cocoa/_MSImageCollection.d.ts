/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImageCollection<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    images<R = NSDictionary>(): R;
    setImages<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace _MSImageCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSImageCollection>(): R;
      new: <R = _MSImageCollection>() => R;
    }
  }
}
