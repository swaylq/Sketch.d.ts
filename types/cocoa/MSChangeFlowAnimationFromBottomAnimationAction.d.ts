/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromBottomAnimationAction<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromBottomAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromBottomAnimation: P0): R;
  }
  namespace MSChangeFlowAnimationFromBottomAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromBottomAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromBottomAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromBottomAnimationAction: cocoa.MSChangeFlowAnimationFromBottomAnimationAction.CLASS;
