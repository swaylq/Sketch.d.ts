/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    edit<R = void, P0 = unknown>(_edit: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSEditAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSEditAction>(): R;
      new: <R = MSEditAction>() => R;
      editableLayerTraits<R = number>(): R;
    }
  }
}

declare const MSEditAction: cocoa.MSEditAction.CLASS;
