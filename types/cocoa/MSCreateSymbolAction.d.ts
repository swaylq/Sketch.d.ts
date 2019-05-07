/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateSymbolAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    historyMomentTitle<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    createSymbolFromLayers<R = void, P0 = unknown>(_createSymbolFromLayers: P0): R;
    doCreateSymbolsFromArtboards<R = void, P0 = unknown>(_doCreateSymbolsFromArtboards: P0): R;
    createSymbolsFromArtboards<R = void, P0 = unknown>(_createSymbolsFromArtboards: P0): R;
    canCreateSymbolsFromArtboards<R = boolean, P0 = unknown>(_canCreateSymbolsFromArtboards: P0): R;
    validate<R = boolean>(): R;
    createSymbolAction<R = void, P0 = unknown>(_createSymbolAction: P0): R;
  }
  namespace MSCreateSymbolAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCreateSymbolAction>(): R;
      new: <R = MSCreateSymbolAction>() => R;
    }
  }
}

declare const MSCreateSymbolAction: cocoa.MSCreateSymbolAction.CLASS;
