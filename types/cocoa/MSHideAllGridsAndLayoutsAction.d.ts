/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHideAllGridsAndLayoutsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    hideAllGridsAndLayouts<R = void, P0 = unknown>(_hideAllGridsAndLayouts: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSHideAllGridsAndLayoutsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSHideAllGridsAndLayoutsAction>(): R;
      new: <R = MSHideAllGridsAndLayoutsAction>() => R;
    }
  }
}

declare const MSHideAllGridsAndLayoutsAction: cocoa.MSHideAllGridsAndLayoutsAction.CLASS;
