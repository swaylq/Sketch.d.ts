/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFlowAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    validate<R = boolean>(): R;
    hasDynamicTitle<R = boolean>(): R;
    labelForToolbar<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    addFlow<R = void, P0 = unknown>(_addFlow: P0): R;
  }
  namespace MSAddFlowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSAddFlowAction>(): R;
      new: <R = MSAddFlowAction>() => R;
    }
  }
}

declare const MSAddFlowAction: cocoa.MSAddFlowAction.CLASS;
