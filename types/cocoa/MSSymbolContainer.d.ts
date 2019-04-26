/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolContainer<T0 = void, T1 = void, T2 = void> extends _MSSymbolContainer {}
  namespace MSSymbolContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSymbolContainer {
      alloc<R = MSSymbolContainer>(): R;
      new: <R = MSSymbolContainer>() => R;
    }
  }
}

declare const MSSymbolContainer: cocoa.MSSymbolContainer.CLASS;
