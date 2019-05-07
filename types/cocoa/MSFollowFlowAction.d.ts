/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFollowFlowAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    followFlow<R = void, P0 = unknown>(_followFlow: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSFollowFlowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSFollowFlowAction>(): R;
      new: <R = MSFollowFlowAction>() => R;
    }
  }
}

declare const MSFollowFlowAction: cocoa.MSFollowFlowAction.CLASS;
