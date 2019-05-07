/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFlowBackAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    addFlowBack<R = void, P0 = unknown>(_addFlowBack: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSAddFlowBackAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSAddFlowBackAction>(): R;
      new: <R = MSAddFlowBackAction>() => R;
    }
  }
}

declare const MSAddFlowBackAction: cocoa.MSAddFlowBackAction.CLASS;
