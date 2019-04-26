/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomToActualSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    actualSize<R = void, P0 = unknown>(_actualSize: P0): R;
  }
  namespace MSZoomToActualSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSZoomToActualSizeAction>(): R;
      new: <R = MSZoomToActualSizeAction>() => R;
    }
  }
}

declare const MSZoomToActualSizeAction: cocoa.MSZoomToActualSizeAction.CLASS;
