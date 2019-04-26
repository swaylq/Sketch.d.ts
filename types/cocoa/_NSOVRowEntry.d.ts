/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOVRowEntry<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSOVRowEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSOVRowEntry>(): R;
      new: <R = _NSOVRowEntry>() => R;
    }
  }
}
