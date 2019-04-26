/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSendToSymbolsPageAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    sendSymbolToSymbolsPage<R = void, P0 = unknown>(_sendSymbolToSymbolsPage: P0): R;
    isAlreadyOnSymbolsPage<R = boolean>(): R;
  }
  namespace MSSendToSymbolsPageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSSendToSymbolsPageAction>(): R;
      new: <R = MSSendToSymbolsPageAction>() => R;
    }
  }
}

declare const MSSendToSymbolsPageAction: cocoa.MSSendToSymbolsPageAction.CLASS;
