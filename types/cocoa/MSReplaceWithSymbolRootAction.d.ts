/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceWithSymbolRootAction<T0 = void, T1 = void, T2 = void> extends MSSharedSymbolAction {
    validationStatus<R = number>(): R;
    replaceWithSymbolRoot<R = void, P0 = unknown>(_replaceWithSymbolRoot: P0): R;
  }
  namespace MSReplaceWithSymbolRootAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedSymbolAction {
      alloc<R = MSReplaceWithSymbolRootAction>(): R;
      new: <R = MSReplaceWithSymbolRootAction>() => R;
    }
  }
}

declare const MSReplaceWithSymbolRootAction: cocoa.MSReplaceWithSymbolRootAction.CLASS;
