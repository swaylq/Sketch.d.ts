/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignSymbolProvider<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace MSForeignSymbolProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignObjectProvider {
      alloc<R = MSForeignSymbolProvider>(): R;
      new: <R = MSForeignSymbolProvider>() => R;
    }
  }
}

declare const MSForeignSymbolProvider: cocoa.MSForeignSymbolProvider.CLASS;
