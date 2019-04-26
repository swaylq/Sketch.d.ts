/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface JSTPSymbolGroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    addSymbol<R = void, P0 = unknown>(_addSymbol: P0): R;
    args<R = NSMutableArray>(): R;
    setArgs<R = void, P0 = NSMutableArray>(_v: P0): R;
    parent<R = JSTPSymbolGroup>(): R;
    setParent<R = void, P0 = JSTPSymbolGroup>(_v: P0): R;
  }
  namespace JSTPSymbolGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = JSTPSymbolGroup>(): R;
      new: <R = JSTPSymbolGroup>() => R;
    }
  }
}

declare const JSTPSymbolGroup: cocoa.JSTPSymbolGroup.CLASS;
