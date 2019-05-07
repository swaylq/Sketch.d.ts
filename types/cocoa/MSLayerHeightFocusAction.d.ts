/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerHeightFocusAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace MSLayerHeightFocusAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSLayerHeightFocusAction>(): R;
      new: <R = MSLayerHeightFocusAction>() => R;
    }
  }
}

declare const MSLayerHeightFocusAction: cocoa.MSLayerHeightFocusAction.CLASS;
