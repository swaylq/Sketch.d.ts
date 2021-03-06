/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeActions<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSDistributeActions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSDistributeActions>(): R;
      new: <R = MSDistributeActions>() => R;
    }
  }
}

declare const MSDistributeActions: cocoa.MSDistributeActions.CLASS;
