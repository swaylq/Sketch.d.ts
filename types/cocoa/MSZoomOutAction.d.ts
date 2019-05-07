/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomOutAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    zoomOut<R = void, P0 = unknown>(_zoomOut: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSZoomOutAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSZoomOutAction>(): R;
      new: <R = MSZoomOutAction>() => R;
    }
  }
}

declare const MSZoomOutAction: cocoa.MSZoomOutAction.CLASS;
