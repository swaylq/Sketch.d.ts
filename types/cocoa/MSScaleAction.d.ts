/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScaleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    validate<R = boolean>(): R;
    scale<R = void, P0 = unknown>(_scale: P0): R;
  }
  namespace MSScaleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSScaleAction>(): R;
      new: <R = MSScaleAction>() => R;
    }
  }
}

declare const MSScaleAction: cocoa.MSScaleAction.CLASS;
