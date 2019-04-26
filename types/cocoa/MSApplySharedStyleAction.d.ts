/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    filteredLayersForStyle<R = unknown>(): R;
    applySharedStyle<R = void, P0 = unknown>(_applySharedStyle: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSApplySharedStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSApplySharedStyleAction>(): R;
      new: <R = MSApplySharedStyleAction>() => R;
    }
  }
}

declare const MSApplySharedStyleAction: cocoa.MSApplySharedStyleAction.CLASS;
