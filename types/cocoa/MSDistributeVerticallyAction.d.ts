/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeVerticallyAction<T0 = void, T1 = void, T2 = void> extends MSDistributeAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    distributeVertically<R = void, P0 = unknown>(_distributeVertically: P0): R;
  }
  namespace MSDistributeVerticallyAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDistributeAction {
      alloc<R = MSDistributeVerticallyAction>(): R;
      new: <R = MSDistributeVerticallyAction>() => R;
    }
  }
}

declare const MSDistributeVerticallyAction: cocoa.MSDistributeVerticallyAction.CLASS;
