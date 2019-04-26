/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomInAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    zoomIn<R = void, P0 = unknown>(_zoomIn: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSZoomInAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSZoomInAction>(): R;
      new: <R = MSZoomInAction>() => R;
    }
  }
}

declare const MSZoomInAction: cocoa.MSZoomInAction.CLASS;
