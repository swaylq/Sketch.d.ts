/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUndoBaseAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isEditingTextLayerContents<R = boolean>(): R;
  }
  namespace MSUndoBaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSUndoBaseAction>(): R;
      new: <R = MSUndoBaseAction>() => R;
    }
  }
}

declare const MSUndoBaseAction: cocoa.MSUndoBaseAction.CLASS;
