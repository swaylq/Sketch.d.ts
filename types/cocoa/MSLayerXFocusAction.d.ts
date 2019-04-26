/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerXFocusAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace MSLayerXFocusAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSLayerXFocusAction>(): R;
      new: <R = MSLayerXFocusAction>() => R;
    }
  }
}

declare const MSLayerXFocusAction: cocoa.MSLayerXFocusAction.CLASS;
