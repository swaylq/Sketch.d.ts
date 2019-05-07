/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFlowHomeAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    addFlowHome<R = void, P0 = unknown>(_addFlowHome: P0): R;
  }
  namespace MSAddFlowHomeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSAddFlowHomeAction>(): R;
      new: <R = MSAddFlowHomeAction>() => R;
    }
  }
}

declare const MSAddFlowHomeAction: cocoa.MSAddFlowHomeAction.CLASS;
