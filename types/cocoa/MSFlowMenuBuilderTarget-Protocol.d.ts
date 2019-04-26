/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowMenuBuilderTargetProtocol<T0 = void, T1 = void, T2 = void> {
    flowTargetAction<R = void, P0 = unknown>(_flowTargetAction: P0): R;
    removeFlowAction<R = void, P0 = unknown>(_removeFlowAction: P0): R;
    flowBackAction<R = void, P0 = unknown>(_flowBackAction: P0): R;
  }
  namespace MSFlowMenuBuilderTargetProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
