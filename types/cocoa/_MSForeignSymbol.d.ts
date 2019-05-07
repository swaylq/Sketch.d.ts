/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignSymbol<T0 = void, T1 = void, T2 = void> extends MSForeignObject {
    symbolMaster<R = MSSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
    originalMaster<R = MSSymbolMaster>(): R;
    setOriginalMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
  }
  namespace _MSForeignSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignObject {
      alloc<R = _MSForeignSymbol>(): R;
      new: <R = _MSForeignSymbol>() => R;
    }
  }
}
