/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarConfigPanelLoader<T0 = void, T1 = void, T2 = void> extends NSObject {
    panel<R = unknown>(): R;
  }
  namespace _NSToolbarConfigPanelLoader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSToolbarConfigPanelLoader>(): R;
      new: <R = _NSToolbarConfigPanelLoader>() => R;
      loadPanelNamed<R = unknown, P0 = unknown>(_loadPanelNamed: P0): R;
    }
  }
}
