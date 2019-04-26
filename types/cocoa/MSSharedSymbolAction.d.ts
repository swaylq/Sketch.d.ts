/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedSymbolAction<T0 = void, T1 = void, T2 = void> extends MSSharedObjectAction {
    sharedObjectName<R = unknown>(): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
  }
  namespace MSSharedSymbolAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObjectAction {
      alloc<R = MSSharedSymbolAction>(): R;
      new: <R = MSSharedSymbolAction>() => R;
    }
  }
}

declare const MSSharedSymbolAction: cocoa.MSSharedSymbolAction.CLASS;
