/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    animationType<R = number>(): R;
  }
  namespace MSChangeFlowAnimationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSChangeFlowAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationAction: cocoa.MSChangeFlowAnimationAction.CLASS;
