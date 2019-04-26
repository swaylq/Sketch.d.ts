/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromRightAnimationAction<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromRightAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromRightAnimation: P0): R;
  }
  namespace MSChangeFlowAnimationFromRightAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromRightAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromRightAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromRightAnimationAction: cocoa.MSChangeFlowAnimationFromRightAnimationAction.CLASS;
