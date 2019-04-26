/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerFocusActions<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSLayerFocusActions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSLayerFocusActions>(): R;
      new: <R = MSLayerFocusActions>() => R;
    }
  }
}

declare const MSLayerFocusActions: cocoa.MSLayerFocusActions.CLASS;
