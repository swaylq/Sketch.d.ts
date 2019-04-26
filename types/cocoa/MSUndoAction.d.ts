/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUndoAction<T0 = void, T1 = void, T2 = void> extends MSUndoBaseAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    undo<R = void, P0 = unknown>(_undo: P0): R;
  }
  namespace MSUndoAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUndoBaseAction {
      alloc<R = MSUndoAction>(): R;
      new: <R = MSUndoAction>() => R;
    }
  }
}

declare const MSUndoAction: cocoa.MSUndoAction.CLASS;
