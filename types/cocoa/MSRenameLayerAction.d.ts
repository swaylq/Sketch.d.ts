/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenameLayerAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    renameLayer<R = void, P0 = unknown>(_renameLayer: P0): R;
  }
  namespace MSRenameLayerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSRenameLayerAction>(): R;
      new: <R = MSRenameLayerAction>() => R;
    }
  }
}

declare const MSRenameLayerAction: cocoa.MSRenameLayerAction.CLASS;
