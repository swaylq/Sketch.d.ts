/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBuiltinDataSupplier<T0 = void, T1 = void, T2 = void> extends MSLocalDataSupplier {}
  namespace MSBuiltinDataSupplier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLocalDataSupplier {
      alloc<R = MSBuiltinDataSupplier>(): R;
      new: <R = MSBuiltinDataSupplier>() => R;
      sourceURLFromFolderURL<R = unknown, P0 = unknown>(_sourceURLFromFolderURL: P0): R;
      linkedFolderNameFromFolderURL<R = unknown, P0 = unknown>(_linkedFolderNameFromFolderURL: P0): R;
    }
  }
}

declare const MSBuiltinDataSupplier: cocoa.MSBuiltinDataSupplier.CLASS;
