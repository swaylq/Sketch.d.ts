/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertTextLayerAction<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
    isSelectable<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertTextLayer<R = void, P0 = unknown>(_insertTextLayer: P0): R;
  }
  namespace MSInsertTextLayerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
      alloc<R = MSInsertTextLayerAction>(): R;
      new: <R = MSInsertTextLayerAction>() => R;
    }
  }
}

declare const MSInsertTextLayerAction: cocoa.MSInsertTextLayerAction.CLASS;
