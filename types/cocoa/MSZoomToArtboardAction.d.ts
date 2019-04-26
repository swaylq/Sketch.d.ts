/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToArtboardAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    zoomToArtboard<R = void, P0 = unknown>(_zoomToArtboard: P0): R;
  }
  namespace MSZoomToArtboardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSZoomToArtboardAction>(): R;
      new: <R = MSZoomToArtboardAction>() => R;
    }
  }
}

declare const MSZoomToArtboardAction: cocoa.MSZoomToArtboardAction.CLASS;
