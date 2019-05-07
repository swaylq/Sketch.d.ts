/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRedoAction<T0 = void, T1 = void, T2 = void> extends MSUndoBaseAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    redo<R = void, P0 = unknown>(_redo: P0): R;
  }
  namespace MSRedoAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUndoBaseAction {
      alloc<R = MSRedoAction>(): R;
      new: <R = MSRedoAction>() => R;
    }
  }
}

declare const MSRedoAction: cocoa.MSRedoAction.CLASS;
