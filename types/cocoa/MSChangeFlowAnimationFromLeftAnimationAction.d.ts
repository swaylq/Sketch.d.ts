/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromLeftAnimationAction<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromLeftAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromLeftAnimation: P0): R;
  }
  namespace MSChangeFlowAnimationFromLeftAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromLeftAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromLeftAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromLeftAnimationAction: cocoa.MSChangeFlowAnimationFromLeftAnimationAction.CLASS;
