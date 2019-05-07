/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignSymbol<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignSymbol {}
  namespace MSImmutableForeignSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignSymbol {
      alloc<R = MSImmutableForeignSymbol>(): R;
      new: <R = MSImmutableForeignSymbol>() => R;
    }
  }
}

declare const MSImmutableForeignSymbol: cocoa.MSImmutableForeignSymbol.CLASS;
