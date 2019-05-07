/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenSymbolInLibraryAction<T0 = void, T1 = void, T2 = void> extends MSOpenInLibraryAction {
    label<R = unknown>(): R;
    openLibraryForForeignSymbols<R = void, P0 = unknown>(_openLibraryForForeignSymbols: P0): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace MSOpenSymbolInLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOpenInLibraryAction {
      alloc<R = MSOpenSymbolInLibraryAction>(): R;
      new: <R = MSOpenSymbolInLibraryAction>() => R;
    }
  }
}

declare const MSOpenSymbolInLibraryAction: cocoa.MSOpenSymbolInLibraryAction.CLASS;
