/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowBaseAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    refreshLayerListInspectorAndOverlay<R = void>(): R;
  }
  namespace MSFlowBaseAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSFlowBaseAction>(): R;
      new: <R = MSFlowBaseAction>() => R;
    }
  }
}

declare const MSFlowBaseAction: cocoa.MSFlowBaseAction.CLASS;
