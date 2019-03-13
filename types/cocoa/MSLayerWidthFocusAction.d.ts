/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerWidthFocusAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerWidthFocusAction<T = any> extends MSDocumentAction {
      alloc<R = MSLayerWidthFocusAction>(): R;
      new: <R = MSLayerWidthFocusAction>() => R;
    }
  }
}

declare const MSLayerWidthFocusAction: cocoa.classes.MSLayerWidthFocusAction;