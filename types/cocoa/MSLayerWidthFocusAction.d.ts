/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWidthFocusAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace MSLayerWidthFocusAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSLayerWidthFocusAction>(): R;
      new: <R = MSLayerWidthFocusAction>() => R;
    }
  }
}

declare const MSLayerWidthFocusAction: cocoa.MSLayerWidthFocusAction.CLASS;
