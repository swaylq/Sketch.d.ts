/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbol<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbol {
    masterInstance<R = unknown>(): R;
  }
  namespace MSImmutableSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbol {
      alloc<R = MSImmutableSymbol>(): R;
      new: <R = MSImmutableSymbol>() => R;
    }
  }
}

declare const MSImmutableSymbol: cocoa.MSImmutableSymbol.CLASS;
