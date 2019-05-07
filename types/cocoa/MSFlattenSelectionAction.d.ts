/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenSelectionAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    flattenSelection<R = void, P0 = unknown>(_flattenSelection: P0): R;
  }
  namespace MSFlattenSelectionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSFlattenSelectionAction>(): R;
      new: <R = MSFlattenSelectionAction>() => R;
    }
  }
}

declare const MSFlattenSelectionAction: cocoa.MSFlattenSelectionAction.CLASS;
