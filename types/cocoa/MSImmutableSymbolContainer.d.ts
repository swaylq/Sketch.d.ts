/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbolContainer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbolContainer {}
  namespace MSImmutableSymbolContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbolContainer {
      alloc<R = MSImmutableSymbolContainer>(): R;
      new: <R = MSImmutableSymbolContainer>() => R;
    }
  }
}

declare const MSImmutableSymbolContainer: cocoa.MSImmutableSymbolContainer.CLASS;
