/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbolContainer<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObjectContainer {}
  namespace _MSImmutableSymbolContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSymbolContainer>(): R;
      new: <R = _MSImmutableSymbolContainer>() => R;
    }
  }
}
