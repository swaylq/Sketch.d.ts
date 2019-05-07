/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbol<T0 = void, T1 = void, T2 = void> extends _MSSymbol {}
  namespace MSSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSymbol {
      alloc<R = MSSymbol>(): R;
      new: <R = MSSymbol>() => R;
    }
  }
}

declare const MSSymbol: cocoa.MSSymbol.CLASS;
