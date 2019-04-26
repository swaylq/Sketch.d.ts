/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationNoAnimationAction<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToNoAnimation<R = void, P0 = unknown>(_changeFlowAnimationToNoAnimation: P0): R;
  }
  namespace MSChangeFlowAnimationNoAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationNoAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationNoAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationNoAnimationAction: cocoa.MSChangeFlowAnimationNoAnimationAction.CLASS;
