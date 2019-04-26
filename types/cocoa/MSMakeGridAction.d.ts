/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeGridAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    validate<R = boolean>(): R;
    makeGrid<R = void, P0 = unknown>(_makeGrid: P0): R;
  }
  namespace MSMakeGridAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSMakeGridAction>(): R;
      new: <R = MSMakeGridAction>() => R;
    }
  }
}

declare const MSMakeGridAction: cocoa.MSMakeGridAction.CLASS;
