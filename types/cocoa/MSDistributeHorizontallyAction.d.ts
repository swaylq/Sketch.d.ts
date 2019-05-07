/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeHorizontallyAction<T0 = void, T1 = void, T2 = void> extends MSDistributeAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    distributeHorizontally<R = void, P0 = unknown>(_distributeHorizontally: P0): R;
  }
  namespace MSDistributeHorizontallyAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDistributeAction {
      alloc<R = MSDistributeHorizontallyAction>(): R;
      new: <R = MSDistributeHorizontallyAction>() => R;
    }
  }
}

declare const MSDistributeHorizontallyAction: cocoa.MSDistributeHorizontallyAction.CLASS;
