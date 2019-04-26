/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromTopAnimationAction<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromTopAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromTopAnimation: P0): R;
  }
  namespace MSChangeFlowAnimationFromTopAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromTopAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromTopAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromTopAnimationAction: cocoa.MSChangeFlowAnimationFromTopAnimationAction.CLASS;
