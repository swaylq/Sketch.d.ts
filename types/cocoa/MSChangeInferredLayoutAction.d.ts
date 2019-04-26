/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeInferredLayoutAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    changeInferredLayout<R = void, P0 = unknown>(_changeInferredLayout: P0): R;
  }
  namespace MSChangeInferredLayoutAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSChangeInferredLayoutAction>(): R;
      new: <R = MSChangeInferredLayoutAction>() => R;
    }
  }
}

declare const MSChangeInferredLayoutAction: cocoa.MSChangeInferredLayoutAction.CLASS;
