/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignSymbol<T0 = void, T1 = void, T2 = void> extends MSImmutableForeignObject {
    symbolMaster<R = MSImmutableSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = MSImmutableSymbolMaster>(_v: P0): R;
    originalMaster<R = MSImmutableSymbolMaster>(): R;
    setOriginalMaster<R = void, P0 = MSImmutableSymbolMaster>(_v: P0): R;
  }
  namespace _MSImmutableForeignSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableForeignObject {
      alloc<R = _MSImmutableForeignSymbol>(): R;
      new: <R = _MSImmutableForeignSymbol>() => R;
    }
  }
}
