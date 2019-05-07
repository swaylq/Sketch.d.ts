/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetSymbolSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    resetSymbolSize<R = void, P0 = unknown>(_resetSymbolSize: P0): R;
  }
  namespace MSResetSymbolSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSResetSymbolSizeAction>(): R;
      new: <R = MSResetSymbolSizeAction>() => R;
    }
  }
}

declare const MSResetSymbolSizeAction: cocoa.MSResetSymbolSizeAction.CLASS;
