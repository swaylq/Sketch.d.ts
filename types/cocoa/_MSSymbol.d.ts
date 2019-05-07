/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbol<T0 = void, T1 = void, T2 = void> extends MSSharedObject {}
  namespace _MSSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObject {
      alloc<R = _MSSymbol>(): R;
      new: <R = _MSSymbol>() => R;
    }
  }
}
