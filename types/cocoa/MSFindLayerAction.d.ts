/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFindLayerAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    findLayer<R = void, P0 = unknown>(_findLayer: P0): R;
  }
  namespace MSFindLayerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSFindLayerAction>(): R;
      new: <R = MSFindLayerAction>() => R;
    }
  }
}

declare const MSFindLayerAction: cocoa.MSFindLayerAction.CLASS;
