/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomActions<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSZoomActions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSZoomActions>(): R;
      new: <R = MSZoomActions>() => R;
    }
  }
}

declare const MSZoomActions: cocoa.MSZoomActions.CLASS;
