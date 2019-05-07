/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToSelectionAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    zoomToSelection<R = void, P0 = unknown>(_zoomToSelection: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSZoomToSelectionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSZoomToSelectionAction>(): R;
      new: <R = MSZoomToSelectionAction>() => R;
    }
  }
}

declare const MSZoomToSelectionAction: cocoa.MSZoomToSelectionAction.CLASS;
