/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSliceAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertSlice<R = void, P0 = unknown>(_insertSlice: P0): R;
  }
  namespace MSInsertSliceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSInsertSliceAction>(): R;
      new: <R = MSInsertSliceAction>() => R;
    }
  }
}

declare const MSInsertSliceAction: cocoa.MSInsertSliceAction.CLASS;
