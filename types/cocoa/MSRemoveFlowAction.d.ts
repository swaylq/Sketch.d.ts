/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveFlowAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    removeFlow<R = void, P0 = unknown>(_removeFlow: P0): R;
  }
  namespace MSRemoveFlowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSRemoveFlowAction>(): R;
      new: <R = MSRemoveFlowAction>() => R;
    }
  }
}

declare const MSRemoveFlowAction: cocoa.MSRemoveFlowAction.CLASS;
