/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHideLayerAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    hideLayer<R = void, P0 = unknown>(_hideLayer: P0): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSHideLayerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSHideLayerAction>(): R;
      new: <R = MSHideLayerAction>() => R;
    }
  }
}

declare const MSHideLayerAction: cocoa.MSHideLayerAction.CLASS;
