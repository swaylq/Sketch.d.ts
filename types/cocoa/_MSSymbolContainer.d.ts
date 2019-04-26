/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSymbolContainer<T0 = void, T1 = void, T2 = void> extends MSSharedObjectContainer {}
  namespace _MSSymbolContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObjectContainer {
      alloc<R = _MSSymbolContainer>(): R;
      new: <R = _MSSymbolContainer>() => R;
    }
  }
}
